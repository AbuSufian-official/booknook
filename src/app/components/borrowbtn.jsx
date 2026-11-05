"use client"

import React, { use, useState } from 'react'
import { WithForm } from './borrowbtnmodal';


function Borrowbtn({ books }) {

    return (

        <WithForm books={books}/>
    )
}

export default Borrowbtn
