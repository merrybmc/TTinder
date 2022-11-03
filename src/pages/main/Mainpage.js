import styled from 'styled-components';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { ReadUserData, ReadSortData } from '../../api/get/ApiGET';
import { useNavigate } from 'react-router-dom';
import { sortInfo } from '../../Store/store';
import { useRecoilValue } from 'recoil';
// import InfiniteScroll from 'react-infinite-scroller';
import React from 'react';
// import { useInView } from 'react-intersection-observer';

export default function Mainpage() {
  const navigate = useNavigate();

  const { gender, minage, maxage, MBTI, location, sorting } = useRecoilValue(sortInfo);

  const { data: sortData } = useQuery(['sortData'], () => ReadSortData({ gender, minage, maxage, MBTI, location }), {
    onSuccess: (temp) => {
      console.log('sortdata', temp);
    },
    onError: (temp) => {
      console.log('errorsortdata', temp);
    },
  });

  console.log(sortData);

  // const { data: userDatas } = useQuery(['userData'], ReadUserData, {
  //   onSuccess: (temp) => {
  //     console.log('data', temp);
  //   },
  // });

  const {
    data: userDatas,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['userData'],
    async ({ pageParam = 0 }) => {
      return await ReadUserData(pageParam);
    },
    {
      getNextPageParam: (lastPage) => {
        console.log('lastpage', lastPage.nextPage);
        return lastPage.nextPage;
      },
      onSuccess: (temp) => {
        console.log('data', temp);
      },
    }
  );

  console.log('test', userDatas);

  // console.log(
  //   'aaa',
  //   userDatas.pages.map((data) => {
  //     return data.data.data.;
  //   })
  // );
  return (
    <>
      {sorting === 0 ? (
        <MainContainer>
          {/* <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}> */}
          {userDatas &&
            userDatas.pages.map((page, i) => {
              return (
                <React.Fragment key={i}>
                  {page?.data.data.map((datas) => (
                    <UserInfoBox
                      onClick={() => {
                        navigate(`/detail/${datas?.id}`);
                      }}
                    >
                      <UserImg src={datas?.photo} />
                      {datas?.logging === false ? (
                        <IsConnect>🟡 접속중</IsConnect>
                      ) : (
                        <IsUnConnect>🔴 접속종료</IsUnConnect>
                      )}
                      <UserProfile>
                        <UserProfileName>{datas?.userName}</UserProfileName>
                        <UserProfileAge>{datas?.age}</UserProfileAge>
                      </UserProfile>
                    </UserInfoBox>
                  ))}

                  <button type="button" onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
                    Load More
                  </button>
                  {/* {fetchNextPage()} */}
                </React.Fragment>
              );
            })}
          {/* </InfiniteScroll> */}
        </MainContainer>
      ) : (
        <MainContainer>
          {sortData &&
            sortData.data.map((data) => {
              return (
                <UserInfoBox
                  key={data?.id}
                  onClick={() => {
                    navigate(`/detail/${data.id}`);
                  }}
                >
                  <UserImg src={data?.photo} />
                  {data?.logging === false ? <IsConnect>🟡 접속중</IsConnect> : <IsUnConnect>🔴 접속종료</IsUnConnect>}
                  <UserProfile>
                    <UserProfileName>{data?.userName}</UserProfileName>
                    <UserProfileAge>{data?.age}</UserProfileAge>
                  </UserProfile>
                </UserInfoBox>
              );
            })}
        </MainContainer>
      )}
    </>
  );
}

const MainContainer = styled.div`
  width: 1544px;
  height: 973px;
  background-color: #f0f2f4;
  overflow-y: scroll;
`;

const UserInfoBox = styled.div`
  margin-left: 583px;
  width: 376px;
  height: 566px;
  background-color: white;
  margin-top: 130px;
  margin-bottom: 100px;
  position: relative;
  cursor: pointer;
  border: 1px solid white;
`;

const UserImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`;

const IsConnect = styled.div`
  width: 100px;
  margin-top: 5px;
  position: absolute;
  font-weight: bold;
  margin-left: 295px;
`;

const IsUnConnect = styled.div`
  width: 100px;
  position: absolute;
  font-weight: bold;
  color: #778194;
  margin-left: 280px;
  margin-top: 5px;
`;

const UserProfile = styled.div`
  position: absolute;
  margin-top: 500px;
  margin-left: 20px;
`;

const UserProfileName = styled.span`
  font-size: 35px;
  color: white;
  font-weight: bold;
`;

const UserProfileAge = styled.span`
  font-size: 26px;
  color: white;
  margin-top: 500px;
  margin-left: 10px;
`;

/* <UserInfoBox>
        <UserImg src="https://pbs.twimg.com/media/EbSKBtIUMAA47Eq.jpg" />
        <UserProfile>
          <UserProfileName>보노보노</UserProfileName>
          <UserProfileAge>28</UserProfileAge>
        </UserProfile>
      </UserInfoBox>
      <UserInfoBox>
        <UserImg src="https://t1.daumcdn.net/cfile/tistory/99606E405A33E19D1D" />
        <IsConnect>🟡 접속중</IsConnect>
        <UserProfile>
          <UserProfileName>페페</UserProfileName>
          <UserProfileAge>36</UserProfileAge>
        </UserProfile>
      </UserInfoBox> */
