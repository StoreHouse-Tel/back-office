import connectDB from "@/libs/mongodb";
import Container, { IContainer } from "@/models/container.model";
import { Model } from "mongoose";
import { NextResponse } from "next/server";
import { URLSearchParams } from "url";


export async function POST(req : Request,) {

    const { name, unit, maxCapacity, quantity, threshold } = await req.json();
    await connectDB();
    const newContainer = await Container.create({
        name,
        unit,
        maxCapacity,
        quantity,
        threshold
    });
    return NextResponse.json({ newContainer }, { status: 201 });
}



export async function GET(): Promise<NextResponse> {
    await connectDB();
    const getContainers: Model<IContainer>[] = await Container.find();
    return NextResponse.json<Array<typeof Container>>(getContainers, { status: 200 });
}


export async function DELETE(req: Request) {

    const params = new URLSearchParams(req.url.split('?')[1]);
    const name = params.get("name");
    await connectDB();
    await Container.deleteOne({ name });
    return NextResponse.json({ message: "Container deleted successfully" }, { status: 200 });
}

// export async function PUT(req: Request) {
//     const { name, unit, maxCapacity, quantity, threshold } = await req.json();
//     await connectDB();
//     const updatedContainer = await Container.findOneAndUpdate(
//         { name },
//         { unit, maxCapacity, quantity, threshold },
//         { new: true } // Return the updated document
//     );
//     return NextResponse.json({ updatedContainer }, { status: 200 });
// }