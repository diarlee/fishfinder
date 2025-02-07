import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Wrapper } from '../../../components/common/Wrapper'
import Header from '../../../components/board/register/Header'
import TagContainer from '../../../components/board/register/TagContainer'
import ImageContainer from '../../../components/board/register/ImageContainer'
import { gray3 } from '../../../assets/styles/palettes'
import TitleContainer from '../../../components/board/register/TitleContainer'
import ContentContainer from '../../../components/board/register/ContentContainer'
import { axiosInstance } from '../../../services/axios'
import { AxiosResponse } from 'axios'
import { reviewFormStore } from '../../../stores/reviewFormStore'

const StyledWrapper = styled(Wrapper)`
  display : flex;
  flex-direction : column;

  padding-bottom : 40px;
`

const Contents = styled.div`
  width : 100%;
  height : auto;

  padding-top : 60px;
`

const Hr = styled.hr`
  background-color: ${gray3};
  height : 0.5px;
  border : 0;
`



export default function BoardRegister() {
  const [fishDatas, setFishDatas] = useState(new Map<string, number>());
  const { setReviewForms } = reviewFormStore();

  useEffect(()=>{
    axiosInstance.get(`/api/fishes`)
      .then((res: AxiosResponse)=>{
        const data : FishData[]= res.data.data;

        const newFishDatas = new Map<string, number>();
        for(let i=0;i<data.length;i++){
          newFishDatas.set(data[i].name, data[i].fishId);
        }

        setFishDatas(newFishDatas);
        setReviewForms([]);
      })
      .catch(error => {throw new Error(error.message)})
  },[])


  return (
    <StyledWrapper>
      {
        fishDatas.size > 0 && (
          <>
           <Header fishDatas = {fishDatas}/>
          <Contents>
            <TagContainer fishDatas = {fishDatas}/>
            <Hr/>
            <ImageContainer/>
            <Hr/>
            <TitleContainer/>
            <Hr/>
            <ContentContainer/>
          </Contents>
          </>
        )
      }
    </StyledWrapper>
  )
}
