import connectDB from "@/libs/mongodb";
import Order from "@/models/order.model";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { containerName, quantity } = await request.json();
  await connectDB();
  const order = await Order.create({
    containerName,
    quantity,
  });
  return NextResponse.json(
    { message: "Order created successfully" },
    {
      status: 200,
    }
  );
}
