import connectDB from "@/libs/mongodb";
import Order, { IOrder } from "@/models/order.model";
import { Model } from "mongoose";
import { NextResponse } from "next/server";
import { URLSearchParams } from "url";


export async function POST(req : Request,) {

    const { name,  quantity} = await req.json();
    await connectDB();
    const newOrder = await Order.create({
        name,
        quantity,
    });
    return NextResponse.json({ newOrder }, { status: 201 });
}



export async function GET(): Promise<NextResponse> {
    await connectDB();
    const getOrders: Model<IOrder>[] = await Order.find();
    return NextResponse.json<Array<typeof Order>>(getOrders, { status: 200 });
}


export async function DELETE(req: Request) {

    const params = new URLSearchParams(req.url.split('?')[1]);
    const name = params.get("name");
    await connectDB();
    await Order.deleteOne({ name });
    return NextResponse.json({ message: "Order deleted successfully" }, { status: 200 });
}

