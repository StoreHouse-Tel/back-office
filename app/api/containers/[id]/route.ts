import connectDB from "@/libs/mongodb";
import Container from "@/models/container.model";
import { NextResponse } from "next/server";


interface RouteParams {
    id: string;
  }

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