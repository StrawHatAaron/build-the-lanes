export const Headers = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache',
  'Accept': '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Connection': 'keep-alive',
}

export function postData(url, data){
  fetch(url, {
    method: 'POST', // or 'PUT'
    headers: Headers,
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    window.location.reload();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

export function deleteData(url, data){
  fetch(url, {
    method: 'DELETE', // or 'PUT'
    headers: Headers,
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    window.location.reload();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

export function deleteDataId(url, id){
  fetch(url, {
    method: 'DELETE', // or 'PUT'
    headers: Headers,
    body: JSON.stringify(id),
  })
  .then((response) => response.json())
  .then((id) => {
    console.log('Success:', id);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

export const AdminsM = {
  Id: "Id",
  Email: "Email",
  PasswordSalt: "Password Salt",
  PasswordHash: "Password Hash",
  Token: "Token",
  FName: "First Name",
  LName: "Last Name",
  Roles: "Roles",
  Title: "Title",
  Created: "Created"
}
export const DonatorsM = {
  Id:"Id",
  Email:"Email",
  PasswordSalt:"Password Salt",
  PasswordHash:"Password Hash",
  Token:"Token",
  FName:"First Name",
  LName:"Last Name",
  Roles:"Roles",
  AmountDonated:"Amount Donated",
}
export const EngineerCertificationsM = {
  Email:"Email",
  Certification:"Certification",
}
export const EngineerDegreesM = {
  Email: "Email",
  Degree: "Degree"
}
export const EngineersM = {
  Id:"Id",
  Email:"Email",
  PasswordSalt:"Password Salt",
  PasswordHash:"Password Hash",
  Token:"Token",
  FName:"First Name",
  LName:"Last Name",
  Roles:"Roles",
  Title:"Title",
  Type:"Type",
}
export const ProjectsM = {
  ProjectNum:"Project Number",
  StartDate:"Start Date",
  Status:"Status",
  City:"City",
  ZipCode:"Zip Code",
}
export const ResponsibilitiesM = {
  Number:"Number",
  StaffEmail:"Staff Email",
  ProjectNum:"Project Number",
}
export const StaffsM = {
  Id:"Id",
  Email:"Email",
  PasswordSalt:"Password Salt",
  PasswordHash:"Password Hash",
  Token:"Token",
  FName:"First Name",
  LName:"Last Name",
  Roles:"Roles",
  Title:"Title",
  Type:"Type",
  Created:"Created",
}

export const ApplicableStandardsM = {
  DataLink: "Data Link",
  ProjectNum: "Project Number",
  PhotoName: "Photo Name",
}

export const DonatesM = {
  Link:"Link",
  ProjectNum:"Project Number",
  DonatorsEmail:"Donator's Email",
}

export const UsersM = {
  Id:"Id",
  Email:"Email",
  PasswordSalt:"Password Salt",
  PasswordHash:"Password Hash",
  Token:"Token",
  FName:"First Name",
  LName:"Last Name",
  Roles:"Roles",
  AmountDonated:"Amount Donated",
  Title:"Title",
  Type:"Type",
  Created:"Created",
}

export const UsersSignUpM = {
  Email:"Email",
  Password: "Password",
  FName:"First Name",
  LName:"Last Name",
  Roles:"Roles",
  AmountDonated:"Amount Donated",
  Title:"Title",
  Type:"Type",
  Created:"Created",
}
