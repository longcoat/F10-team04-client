import { red } from "@material-ui/core/colors";
import { useEffect, useState } from "react";

declare const window: typeof globalThis & {
    kakao: any
}

export default function KaKaoMapDetail(){
  const path = [
    {La: 126.90119091983088, Ma: 37.48487470816507},
    {La: 126.89999162069624, Ma: 37.48546836439742},
    {La: 126.89960783004845, Ma: 37.48499050465791},
    {La: 126.89977840516565, Ma: 37.48426083290029},
    {La: 126.90049119720571, Ma: 37.48390103210031},
    {La: 126.89992677261195, Ma: 37.48322479917196}
  ]
  const center =[35.159446637018306, 126.82649693224857]

    useEffect(()=> {
        const script = document.createElement("script") // <script></script> 랑 동일
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=dfd2187d17e3ae42f8de6ad34cb0fa34&libraries=drawing"
        document.head.appendChild(script)

        script.onload = () => {

            window.kakao.maps.load(function(){
                let mapContainer = document.getElementById('map'), // 지도를 표시할 div 
                mapOptions = { 
                    center: new window.kakao.maps.LatLng(center[0], center[1]), // 지도의 중심좌표
                    level: 4 // 지도의 확대 레벨
            }
            var map = new window.kakao.maps.Map(mapContainer, mapOptions)

            var imageSrc = "";
             

            let distanceOverlay
            let dots = {}
            
            const  positions = []
     for(let i = 0;i < path.length;i++) {
        const obj = {
            latlng : new window.kakao.maps.LatLng()
          }
          obj.latlng.La = Object.values(path[i])[0]
          obj.latlng.Ma = Object.values(path[i])[1]
          positions.push(obj)
     }
     
     console.log(positions)

     let linePath;
     let lineLine = new window.kakao.maps.Polyline();
     let distance;

    


        for(let i = 0; i < positions.length; i++) {
            if(i != 0) {
                linePath = [positions[i - 1].latlng, positions[i].latlng]
            }

            lineLine.setPath(linePath)

            let drawLine = new window.kakao.maps.Polyline({
                map: map,
                path: linePath,
                strokeWeight: 3,
                StrokeColor: red,
                strokeOpacity: 1,
                strokeStyle: 'solid'
            })
            distance = Math.round(lineLine.getLength())
            displayCircleDot(positions[i].latlng, distance)
        }
        console.log(linePath)

        function displayCircleDot(position, distance){
            if(distance > 0) {
                let distanceOverlay = new window.kakao.maps.CustomOverlay({
             
                    position: position,
                    yAnchor: 2,
                    zIndex: 10
                })
                distanceOverlay.setMap(map)
            }
        }
        for (let i = 0; i < positions.length; i++) {
                
            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new window.kakao.maps.Size((i === 0 ) ?  24 : 0, (i === 0 || i === positions.length - 1)  ?  35: 0); 
          
            // 마커 이미지를 생성합니다    
            var markerImage = new window.kakao.maps.MarkerImage(
                i === 0 ? "/start.png" : "" 
                , imageSize); 
            
            // 마커를 생성합니다
            var marker = new window.kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title : '', // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image : markerImage // 마커 이미지 
            });
        }
  

        function getTimeHTML(distance) {

            // 도보의 시속은 평균 4km/h 이고 도보의 분속은 67m/min입니다
            var walkkTime = distance / 67 | 0;
            var walkHour = '', walkMin = '';
        
            // 계산한 도보 시간이 60분 보다 크면 시간으로 표시합니다
            if (walkkTime > 60) {
                walkHour = '<span class="number">' + Math.floor(walkkTime / 60) + '</span>시간 '
            }
            walkMin = '<span class="number">' + walkkTime % 60 + '</span>분'
        
            // 자전거의 평균 시속은 16km/h 이고 이것을 기준으로 자전거의 분속은 267m/min입니다
            var bycicleTime = distance / 227 | 0;
            var bycicleHour = '', bycicleMin = '';
        
            // 계산한 자전거 시간이 60분 보다 크면 시간으로 표출합니다
            if (bycicleTime > 60) {
                bycicleHour = '<span class="number">' + Math.floor(bycicleTime / 60) + '</span>시간 '
            }
            bycicleMin = '<span class="number">' + bycicleTime % 60 + '</span>분'
        
            // 거리와 도보 시간, 자전거 시간을 가지고 HTML Content를 만들어 리턴합니다
            var content = '<ul class="dotOverlay distanceInfo">';
            content += '    <li>';
            content += '        <span class="label">총거리</span><span class="number">' + distance + '</span>m';
            content += '    </li>';
            content += '    <li>';
            content += '        <span class="label">도보</span>' + walkHour + walkMin;
            content += '    </li>';
            content += '    <li>';
            content += '        <span class="label">자전거</span>' + bycicleHour + bycicleMin;
            content += '    </li>';
            content += '</ul>'
        
            return content;
        }


    })
}
    },[])
    return(
        <>
            <div id="map" style={{width:500 ,height:500}}></div> 
        </>
    )
}