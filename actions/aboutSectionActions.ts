"use server";
export const addAbout = async (e:FormData) => {
  const title = e.get('title')?.toString();
  const description = e.get('description')?.toString();
  const fileInput: File | null = e.get('aboutImage') as unknown as File;
  let formData = new FormData();
  if(!title || !description || !fileInput){
    console.error("there is a missing field");
    return;
  } 
  
  formData.append("title", title);
  formData.append("description", description);
  formData.append("aboutImage", fileInput);
  const url:string = "http://172.16.150.11/my-web-api/public/api/postabout" 
    await fetch(url, {
      cache: "no-cache",
      method: 'POST',
      body: formData,
      headers: {
        Content_Type: "multipart/form-data",
      }
    })

}


export const addContactInfo = async (e:FormData) => {
  const platform = e.get('platform')?.toString();
  const link = e.get('link')?.toString();
  if(!platform || !link){
    console.error("there is a missing field");
    return;
  } 

  let formData = new FormData();
  formData.append('platform', platform);
  formData.append('link', link);

  const infoInput = {
    platform,
    link,
  }
  
  const url:string = "http://172.16.150.11/my-web-api/public/api/postcontact" 
  try {
    const response = await fetch(url, {
      cache: "no-cache",
      method: 'POST',
      body: formData,
      headers: {
        Content_Type: "multipart/form-data",
      }
    });

    if (response.ok) {
      const responseData = await response.json();
      if (responseData.code === 200) {
      } else {
      }
      } else {
      }

  } catch (e) {
  }
}

export const addExp= async (e:FormData) => {
  const position = e.get('position')?.toString();
  const company = e.get('company')?.toString();
  const start_date = e.get('start_date')?.toString();
  const end_date = e.get('end_date')?.toString();
  const currently_working = e.get('currently_working')?.toString();
  const expImage: File | null = e.get('exp_Image') as unknown as File;
  const summery = e.get('summery')?.toString();
  const technologies = e.get('technologies')?.toString();

  let formData = new FormData();

  
  
  if(!position || !company || !start_date || !end_date || !summery || !technologies || !expImage || currently_working == undefined){
    if (!position) {
    }
if (!company) {
    }
if (!start_date) {
    }
if (!end_date) {
    }
 if (!summery) {
    }
if (!technologies) {
    }
if (!expImage) {
    }
if (currently_working == undefined) {
    }
    return
  }
 
  formData.append('position', position);
  formData.append('company', company);
  formData.append('start_date', start_date);
  formData.append('end_date', end_date);
  formData.append('currently_working', currently_working == "true"? "1" : "0" );
  formData.append('technologies', technologies);
  formData.append('summery', summery);
  formData.append('exp_Image', expImage);
  
  // for(const [key, value] in formData.entries()) {
  // }

  const url:string = "http://172.16.150.11/my-web-api/public/api/postexp";
  const response = await fetch(url, {
    cache: "no-cache",
    method: 'POST',
    body: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    }
  })
  const responseData = await response.json();
}
