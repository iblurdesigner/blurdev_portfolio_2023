import { NextResponse } from "next/server";
import apiblur from "../lib/portfolio.json";

export async function GET() {
    return NextResponse.json({
        data: apiblur
    })
}