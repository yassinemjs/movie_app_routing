import React from 'react'
import {useHistory} from 'react-router-dom'
import { Button} from 'react-bootstrap'

export default function Trailer({match ,res}) {
   
   const history = useHistory();
   const ind = res.find (el => el.title == match.params.title)
   if(ind)
    return (
        <div>
          <Button color="primary" className="px-4"
                onClick={() =>  history.push('/') }
                  >
                  Return Home Page
        </Button>
            <h1>{ind.description}</h1>
            <div>
            <iframe width="560" height="315" src={ind.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}
