import { useFetchData } from "6pp";
import { type ReactElement, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { ColumnDef } from "@tanstack/react-table";
import AdminSidebar from "../../components/admin/AdminSidebar";
import TableHOC from "../../components/admin/TableHOC";
import { Skeleton } from "../../components/loader";
import { type RootState, server } from "../../redux/store";
import type { AllDiscountResponse } from "../../types/api-types";

interface DataType {
  code: string;
  amount: number;
  _id: string;
  action: ReactElement;
}

const columns: ColumnDef<DataType>[] = [
  { header: "Id", accessorKey: "_id" },
  { header: "Code", accessorKey: "code" },
  { header: "Amount", accessorKey: "amount" },
  { header: "Action", accessorKey: "action" },
];

const Discount = () => {
  const { user } = useSelector((state: RootState) => state.userReducer);

  const {
    data,
    loading: isLoading,
    error,
  } = useFetchData<AllDiscountResponse>({
    url: `${server}/api/v1/payment/coupon/all?id=${user?._id}`,
    key: "discount-codes",
    dependencyProps: [user?._id ?? ""], // 
  });

  const [rows, setRows] = useState<DataType[]>([]);

  const Table = TableHOC<DataType>(
    columns,
    rows,
    "dashboard-product-box",
    "Discount Codes",
    rows.length > 6
  )();

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  useEffect(() => {
    if (data) {
      setRows(
        data.coupons.map((i) => ({
          _id: i._id,
          code: i.code,
          amount: i.amount,
          action: <Link to={`/admin/discount/${i._id}`}>Manage</Link>,
        }))
      );
    }
  }, [data]);

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{isLoading ? <Skeleton length={20} /> : Table}</main>
      <Link to="/admin/discount/new" className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Discount;
