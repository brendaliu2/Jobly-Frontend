import {useParams} from 'react-router-dom'

function CompanyDetail(){
  
  const params = useParams();
  
  return(
    <h1>Company details about {params.handle}!</h1>
  )
}

export default CompanyDetail;