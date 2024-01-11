import { NextResponse } from "next/server";
import apiblur from "../../../public/portfolio.json";

export async function GET() {
    return NextResponse.json({
        data: apiblur
    })
}
