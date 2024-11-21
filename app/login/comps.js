function create_error_T(text){
    const err = document.getElementById("error")
    const p = document.createElement("p")
    p.className = "text-lg red"
    const err_t = document.createTextNode(text)
    err?.append(err_t)
  }