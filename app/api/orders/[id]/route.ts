import connectDB from "@/libs/mongodb";
import Order , { IOrder } from "@/models/order.model";
import { Model } from "mongoose";
import { NextResponse } from "next/server";


interface RouteParams {
    id: string;
  }
  type Order = {
    _id: string;
    name: string;
    quantity: number;
  };

  export async function PUT(req: Request, { params }: { params: RouteParams }) {
    const { id } = params;
    const { quantity } = await req.json();
    await connectDB();
    const updateOrder = await Order.findByIdAndUpdate(id, {  quantity,},{ new: true });
    
    if (!updateOrder) {
        return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json({ updateOrder }, { status: 200 });
}

export async function GET(req: Request, { params }: { params: RouteParams }): Promise<NextResponse> {
    const { id } = params;
    await connectDB();
    const getOrder = await Order.findById(id);
    if (!getOrder) {
        return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json({ getOrder}, { status: 200 });
}
    
