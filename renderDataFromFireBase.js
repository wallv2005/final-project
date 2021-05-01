let dom_name = document.getElementById("dom_name")
let dom_aboutme = document.getElementById("dom_aboutme")
let dom_edu_course = document.getElementById("dom_edu_course")

let getData = async ()=>{
    let result = await firebase.firestore().collection('cv').get()
    let data = await getDataFromDocs(result.docs)

    let html_dom_aboutme = `<h2 class="title">ABOUT ME</h2>
    <hr />
    <p>${data[0].aboume}
    </p>`

    dom_edu_course.innerHTML = `${render_edu_course(data[0].education)}                <li class="timeline-item period">
    <div class="timeline-info"></div>
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <h2 class="timeline-title">AFTER SCHOOL COURSES</h2>
    </div>
  </li>${render_edu_course(data[0].course)} `
    
    
    dom_name.innerText = data[0].name
    dom_aboutme.innerHTML = html_dom_aboutme
    
}

getData()



let render_edu_course = (data)=>{
    let html =""
    for(let i = 0; i<data.length;i++){
        let h = `
        <li class="timeline-item">
        <div class="timeline-info">
          <span>SEP ${data[i].time}</span>
        </div>
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3 class="timeline-title">${data[i].title}</h3>
          <p>
            ${data[i].des}
          </p>
        </div>
      </li>`
      html +=h
    }
    return html
}

let getDataFromDoc = (doc)=>{
    let data = doc.data()
    data.id = doc.id
    return data

}
let getDataFromDocs = (docs)=>{
   let result =[]
   for(let doc of docs){
       let data = getDataFromDoc(doc)
       result.push(data)
    }
   return result
}