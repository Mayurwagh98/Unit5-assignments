import {addNote} from "./note"

import ("../index.css")

document.getElementById("note").addEventListener("keypress", addNote)