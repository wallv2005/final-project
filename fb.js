
let getData = async ()=>{
    let result = await firebase.firestore().collection('thanhwvan').get()
    console.log(result);
    let data = await getDataFromDocs(result.docs)
    console.log(data)
}

// getData()

let createData = async (d)=>{
    await firebase.firestore().collection('thanhwvan').add(d)
}
let getDataFromDoc = (doc)=>{
    let data = doc.data()
    data.id = doc.id
    return data

}
let getDataFromDocs = (docs)=>{
   let result =[]
   for(let doc of docs){
       let data = utils.getDataFromDoc(doc)
       result.push(data)
    }
   return result
}