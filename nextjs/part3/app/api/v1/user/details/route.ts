import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        name:"Gyanranjan Patra",
        email:"gyanpatra77.keonjhar@gmail.com"
    })
}

export function PUT(){
    return NextResponse.json({
        message:"Put request handler "
    })
}