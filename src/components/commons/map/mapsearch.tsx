// 주소 검색 + 카카오맵 마커
import styled from "@emotion/styled";
import { ChangeEvent, useEffect, useState } from "react";
import _ from "lodash";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapUI(props: any) {
  const [searchText, setSearchText] = useState("");
  // const [addressDetail, setAddressDetail] = useState("");

  const getDebounce = _.debounce((data) => {
    setSearchText(data);
  }, 1000);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
    // setSearchText(event.target.value);
  };
  const onChangeDetail = (event: ChangeEvent<HTMLInputElement>) => {
    // setAddressDetail(event.target.value);
    props.setAddress((prev: any) => ({
      ...prev,
      addressDetail: event.target.value,
    }));
  };
  let geocoder: any;
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=0f8eaab205858289af49e81c538882e4&libraries=services&autoload=false"; // 카카오맵이 로드되면 실행

    document.head.appendChild(script); // header에 script를 자식으로 추가한다.

    script.onload = () => {
      // script가 로드되면 실행
      window.kakao.maps.load(function () {
        // map이 만들어진 이후에 실행
        const mapContainer = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const mapOption = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            37.484979002116,
            126.89671615872463
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도 생성 및 객체 리턴 : 담아도 되고 안 담아도 된다.

        try {
          geocoder = new window.kakao.maps.services.Geocoder();
        } catch (e) {
          console.log(e);
          return;
        }
        // 주소-좌표 변환 객체를 생성합니다

        function searchDetailAddrFromCoords(coords: any, callback: any) {
          // 좌표로 법정동 상세 주소 정보를 요청합니다
          geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }
        /* 상세 주소 구하기 */
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: any) {
            searchDetailAddrFromCoords(
              mouseEvent.latLng,
              function (result: any, status: any) {
                if (status === window.kakao.maps.services.Status.OK) {
                  setSearchText(
                    result[0].road_address
                      ? result[0].road_address.address_name
                      : result[0].address.address_name
                  );

                  props.setAddress((prev: any) => ({
                    ...prev,
                    address: result[0].road_address
                      ? result[0].road_address.address_name
                      : result[0].address.address_name,
                  }));

                  // props.setAddress({
                  //   address: result[0].road_address
                  //     ? result[0].road_address.address_name
                  //     : result[0].address.address_name,
                  // });
                }
              }
            );
          }
        );
        const imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png"; // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );
        // if (geocoder)
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          searchText || props.address || "서울 구로구 디지털로 300",
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              props.setAddress((prev: any) => ({
                ...prev,
                lat: Number(result[0].y),
                lng: Number(result[0].x),
              }));

              // 마커를 생성합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
                image: markerImage, // 마커이미지 설정
              });

              marker.setMap(map);

              map.setCenter(coords);
            } else {
              // alert(
              //   "검색 결과가 없습니다. 주소 검색 버튼을 눌러서 다시 검색해주세요."
              // );
              setSearchText("");
            }
          }
        );
      });
    };
  }, [searchText, props.address, geocoder]);
  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  const onCompleteAddressSearch = (data: any) => {
    console.log(data);
    props.setAddress({ zipcode: data.zonecode, address: data.address });
    setSearchText(data.address);
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={onCompleteAddressSearch} />
        </Modal>
      )}
      <Wrapper>
        <SearchWrapper>
          <InputWrapper>
            <Input
              onChange={onChangeInput}
              placeholder="위치"
              defaultValue={
                props.isEdit ? searchText || props?.address : searchText
              }
            />
          </InputWrapper>
          <Button type="button" onClick={onToggleModal}>
            주소 검색
          </Button>
        </SearchWrapper>
        <Map id="map" style={{ width: 600, height: 400 }}></Map>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: column;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
`;
const Input = styled.input`
  border: 1px solid #8b8b8b;
  border-radius: 16px;
  width: 284px;
  height: 63px;
`;
const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  height: 50px;
`;
const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  width: 161px;
  height: 63px;
  background-color: black;
  color: #fff;
  border-radius: 16px;
  margin-left: 16px;
`;
const Map = styled.div`
  width: 856px;
`;
