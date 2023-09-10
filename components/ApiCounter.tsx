import React, { useEffect, useState } from 'react'
import { Card, CardContent } from './ui/card'
import { MAX_FREE_COUNTS } from '@/constants'
import { Progress } from './ui/progress'
interface ApiCounterProps{
    apiLimit?:number
}
const ApiCounter = ({apiLimit}:ApiCounterProps) => {
    const [mounted, setMounted] = useState<boolean>(false)
    useEffect(()=>{
        setMounted(true)
    },[])

    if(!mounted){
        return null
    }
  return (
    <div className='px-3 py-2'>
        <Card className='bg-white/10 border-0'>
            <CardContent className='py-3' >
                <div className='text-center text-sm text-white mb-2 space-y-2'>
            <p>
                {apiLimit} / {MAX_FREE_COUNTS} Free Tier
            </p>
           <Progress value={(apiLimit! / MAX_FREE_COUNTS )* 100} />
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default ApiCounter