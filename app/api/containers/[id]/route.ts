import connectDB from "@/libs/mongodb";
import Container, { IContainer } from "@/models/container.model";
import { Model } from "mongoose";
import { NextResponse } from "next/server";


interface RouteParams {
    id: string;
  }
  type Container = {
    _id: string;
    name: string;
    unit: string;
    maxCapacity: number;
    quantity: number;
    threshold: number;
    populatorCurrentPercentage: number;
  };

  export async function PUT(req: Request, { params }: { params: RouteParams }) {
    const { id } = params;
    const {unit, maxCapacity, quantity, threshold } = await req.json();
    await connectDB();
    const updateContainer = await Container.findByIdAndUpdate(id, { unit, maxCapacity, quantity, threshold },{ new: true });
    
    if (!updateContainer) {
        return NextResponse.json({ error: "Container not found" }, { status: 404 });
    }

    return NextResponse.json({ updateContainer }, { status: 200 });
}

export async function GET(req: Request, { params }: { params: RouteParams }): Promise<NextResponse> {
    const { id } = params;
    await connectDB();
    const getContainer = await Container.findById(id);
    if (!getContainer) {
        return NextResponse.json({ error: "Container not found" }, { status: 404 });
    }

    return NextResponse.json({ getContainer}, { status: 200 });
}
    
