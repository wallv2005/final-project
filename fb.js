
let getData = async ()=>{
    let result = await firebase.firestore().collection('cv').get()
    let data = await getDataFromDocs(result.docs)
    console.log(data)
}

getData()

let createData = async (d)=>{
    await firebase.firestore().collection('cv').add(d)
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