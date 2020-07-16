import React, { Component } from 'react'
import ClassProps from './ClassProps'
import FunctionProps from './FunctionProps'

export default class DemoProps extends Component {
    render() {
        const dog = {
            image:
            "https://achocanh.com/wp-content/uploads/2018/06/dog-1476155_1920-825x550.jpg",
            name: "husky",
            age: '3 tuổi'
        }
        
        const cat = {
            srcImg:"https://image.plo.vn/w653/Uploaded/2020/xpckxpiu/2020_03_10/meo-plo_xiow.jpg",
            name: 'meomeo',
            age: '5 tuổi'
        }
        return (
            <div className="text-center">
                <h1>Demo Props</h1>
                <ClassProps cho={dog} />
                <FunctionProps meo={cat} />
            </div>
        )
    }
}
