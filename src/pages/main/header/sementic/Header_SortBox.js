import styled from 'styled-components';
import { useState } from 'react';
import { sortInfo } from '../../../../Store/store';
import { useRecoilState } from 'recoil';

export default function Header_SortBox() {
  const [headerSortInfo, setHeaderSortInfo] = useRecoilState(sortInfo);

  const [gender, setGender] = useState(0);

  const [location, setLocation] = useState(0);

  const [MBTI, setMBTI] = useState(0);

  // 성별 선택
  const onChoiceGender = (genders) => {
    if (gender === 0) {
      setGender(genders);
      setHeaderSortInfo({ ...headerSortInfo, gender: genders });
      console.log('a', headerSortInfo);
      console.log(gender);
    } else if (genders === '남') {
      setGender('남');
      setHeaderSortInfo({ ...headerSortInfo, gender: genders });
      console.log('a', headerSortInfo);
      console.log(gender);
    } else if (genders === '여') {
      setGender('여');
      setHeaderSortInfo({ ...headerSortInfo, gender: genders });
      console.log('a', headerSortInfo);
      console.log(gender);
    }
  };

  // 지역 선택
  const onChoiceLocation = (locations) => {
    if (location === 0) {
      setLocation(locations);
      setHeaderSortInfo({ ...headerSortInfo, location: locations });
      console.log(headerSortInfo);
    } else if (locations === '서울') {
      setLocation('서울');
      setHeaderSortInfo({ ...headerSortInfo, location: locations });
      console.log(headerSortInfo);
    } else if (locations === '경기') {
      setLocation('경기');
      setHeaderSortInfo({ ...headerSortInfo, location: locations });
      console.log(headerSortInfo);
    } else if (locations === '인천') {
      setLocation('인천');
      setHeaderSortInfo({ ...headerSortInfo, location: locations });
      console.log(headerSortInfo);
    } else if (locations === '세종') {
      setLocation('세종');
      setHeaderSortInfo({ ...headerSortInfo, location: locations });
      console.log(headerSortInfo);
    } else if (locations === '대전') {
      setLocation('대전');
      setHeaderSortInfo({ ...headerSortInfo, location: locations });
      console.log(headerSortInfo);
    } else if (locations === '대구') {
      setLocation('대구');
      setHeaderSortInfo({ ...headerSortInfo, location: locations });
      console.log(headerSortInfo);
    } else if (locations === '광주') {
      setLocation('광주');
      setHeaderSortInfo({ ...headerSortInfo, location: locations });
      console.log(headerSortInfo);
    } else if (locations === '울산') {
      setLocation('울산');
      setHeaderSortInfo({ ...headerSortInfo, location: locations });
      console.log(headerSortInfo);
    } else if (locations === '부산') {
      setLocation('부산');
      setHeaderSortInfo({ ...headerSortInfo, location: locations });
      console.log(headerSortInfo);
    } else if (locations === '제주') {
      setLocation('제주');
      setHeaderSortInfo({ ...headerSortInfo, location: locations });
      console.log(headerSortInfo);
    } else if (locations === '강원') {
      setLocation('강원');
      setHeaderSortInfo({ ...headerSortInfo, location: locations });
      console.log(headerSortInfo);
    } else if (locations === '충북') {
      setLocation('충북');
      setHeaderSortInfo({ ...headerSortInfo, location: locations });
      console.log(headerSortInfo);
    } else if (locations === '경북') {
      setLocation('경북');
      setHeaderSortInfo({ ...headerSortInfo, location: locations });
      console.log(headerSortInfo);
    } else if (locations === '전북') {
      setLocation('전북');
      setHeaderSortInfo({ ...headerSortInfo, location: locations });
      console.log(headerSortInfo);
    } else if (locations === '전남') {
      setLocation('전남');
      setHeaderSortInfo({ ...headerSortInfo, location: locations });
      console.log(headerSortInfo);
    } else if (locations === '경남') {
      setLocation('경남');
      setHeaderSortInfo({ ...headerSortInfo, location: locations });
      console.log(headerSortInfo);
    } else if (locations === '충남') {
      setLocation('충남');
      setHeaderSortInfo({ ...headerSortInfo, location: locations });
      console.log(headerSortInfo);
    }
  };

  // MBTI 선택
  const onChoiceMBTI = (MBTIs) => {
    if (MBTI === 0) {
      setMBTI(MBTIs);
      setHeaderSortInfo({ ...headerSortInfo, MBTI: MBTIs });
      console.log(headerSortInfo);
    } else if (MBTIs === 'INTJ') {
      setMBTI('INTJ');
      setHeaderSortInfo({ ...headerSortInfo, MBTI: MBTIs });
      console.log(headerSortInfo);
    } else if (MBTIs === 'INTP') {
      setMBTI('INTP');
      setHeaderSortInfo({ ...headerSortInfo, MBTI: MBTIs });
      console.log(headerSortInfo);
    } else if (MBTIs === 'ENTJ') {
      setMBTI('ENTJ');
      setHeaderSortInfo({ ...headerSortInfo, MBTI: MBTIs });
      console.log(headerSortInfo);
    } else if (MBTIs === 'ENTP') {
      setMBTI('ENTP');
      setHeaderSortInfo({ ...headerSortInfo, MBTI: MBTIs });
      console.log(headerSortInfo);
    } else if (MBTIs === 'INFJ') {
      setMBTI('INFJ');
      setHeaderSortInfo({ ...headerSortInfo, MBTI: MBTIs });
      console.log(headerSortInfo);
    } else if (MBTIs === 'INFP') {
      setMBTI('INFP');
      setHeaderSortInfo({ ...headerSortInfo, MBTI: MBTIs });
      console.log(headerSortInfo);
    } else if (MBTIs === 'ENFJ') {
      setMBTI('ENFJ');
      setHeaderSortInfo({ ...headerSortInfo, MBTI: MBTIs });
      console.log(headerSortInfo);
    } else if (MBTIs === 'ENFP') {
      setMBTI('ENFP');
      setHeaderSortInfo({ ...headerSortInfo, MBTI: MBTIs });
      console.log(headerSortInfo);
    } else if (MBTIs === 'ISTJ') {
      setMBTI('ISTJ');
      setHeaderSortInfo({ ...headerSortInfo, MBTI: MBTIs });
      console.log(headerSortInfo);
    } else if (MBTIs === 'ISFJ') {
      setMBTI('ISFJ');
      setHeaderSortInfo({ ...headerSortInfo, MBTI: MBTIs });
      console.log(headerSortInfo);
    } else if (MBTIs === 'ESTJ') {
      setMBTI('ESTJ');
      setHeaderSortInfo({ ...headerSortInfo, MBTI: MBTIs });
      console.log(headerSortInfo);
    } else if (MBTIs === 'ESFJ') {
      setMBTI('ESFJ');
      setHeaderSortInfo({ ...headerSortInfo, MBTI: MBTIs });
      console.log(headerSortInfo);
    } else if (MBTIs === 'ISTP') {
      setMBTI('ISTP');
      setHeaderSortInfo({ ...headerSortInfo, MBTI: MBTIs });
      console.log(headerSortInfo);
    } else if (MBTIs === 'ISFP') {
      setMBTI('ISFP');
      setHeaderSortInfo({ ...headerSortInfo, MBTI: MBTIs });
      console.log(headerSortInfo);
    } else if (MBTIs === 'ESTP') {
      setMBTI('ESTP');
      setHeaderSortInfo({ ...headerSortInfo, MBTI: MBTIs });
      console.log(headerSortInfo);
    } else if (MBTIs === 'ESFP') {
      setMBTI('ESFP');
      setHeaderSortInfo({ ...headerSortInfo, MBTI: MBTIs });
      console.log(headerSortInfo);
    }
  };

  // 최소 나이
  const onChangeMinAge = (event) => {
    const { name, value } = event.target;
    setHeaderSortInfo({ ...headerSortInfo, [name]: value });
    console.log(headerSortInfo);
  };

  // 최대 나이
  const onChangeMaxAge = (event) => {
    const { name, value } = event.target;
    setHeaderSortInfo({ ...headerSortInfo, [name]: value });
    console.log(headerSortInfo);
  };

  const onSort = () => {
    setHeaderSortInfo({ ...headerSortInfo, sorting: 1 });
    console.log(headerSortInfo);
  };

  const onInitialState = () => {
    setHeaderSortInfo({ sorting: 0 });
    console.log(headerSortInfo);
  };

  return (
    <StSortBox>
      <StGenderBox value="20" max="100">
        <p>성별</p>

        <StChoiceGender
          gender={gender}
          onClick={() => {
            onChoiceGender('남');
          }}
        >
          남자
        </StChoiceGender>
        <StChoiceGender2
          gender={gender}
          onClick={() => {
            onChoiceGender('여');
          }}
        >
          여자
        </StChoiceGender2>
      </StGenderBox>
      <p>나이</p>
      <StAgeBox>
        <StAgeBar type="number" name="minage" onChange={onChangeMinAge}></StAgeBar>세<span>~</span>
        <StAgeBar type="number" name="maxage" onChange={onChangeMaxAge}></StAgeBar>세
      </StAgeBox>
      <p>지역</p>
      <LocationList>
        <Location1
          location={location}
          onClick={() => {
            onChoiceLocation('서울');
          }}
        >
          서울
        </Location1>
        <Location2
          location={location}
          onClick={() => {
            onChoiceLocation('경기');
          }}
        >
          경기
        </Location2>
        <Location3
          location={location}
          onClick={() => {
            onChoiceLocation('인천');
          }}
        >
          인천
        </Location3>
        <Location4
          location={location}
          onClick={() => {
            onChoiceLocation('세종');
          }}
        >
          세종
        </Location4>
        <Location5
          location={location}
          onClick={() => {
            onChoiceLocation('대전');
          }}
        >
          대전
        </Location5>
        <Location6
          location={location}
          onClick={() => {
            onChoiceLocation('대구');
          }}
        >
          대구
        </Location6>
        <Location7
          location={location}
          onClick={() => {
            onChoiceLocation('광주');
          }}
        >
          광주
        </Location7>
        <Location8
          location={location}
          onClick={() => {
            onChoiceLocation('울산');
          }}
        >
          울산
        </Location8>
        <Location9
          location={location}
          onClick={() => {
            onChoiceLocation('부산');
          }}
        >
          부산
        </Location9>
      </LocationList>
      <LocationList>
        <Location10
          location={location}
          onClick={() => {
            onChoiceLocation('제주');
          }}
        >
          제주
        </Location10>
        <Location11
          location={location}
          onClick={() => {
            onChoiceLocation('강원');
          }}
        >
          강원
        </Location11>
        <Location12
          location={location}
          onClick={() => {
            onChoiceLocation('충북');
          }}
        >
          충북
        </Location12>
        <Location13
          location={location}
          onClick={() => {
            onChoiceLocation('충남');
          }}
        >
          충남
        </Location13>
        <Location14
          location={location}
          onClick={() => {
            onChoiceLocation('경북');
          }}
        >
          경북
        </Location14>
        <Location15
          location={location}
          onClick={() => {
            onChoiceLocation('경남');
          }}
        >
          경남
        </Location15>
        <Location16
          location={location}
          onClick={() => {
            onChoiceLocation('전북');
          }}
        >
          전북
        </Location16>
        <Location17
          location={location}
          onClick={() => {
            onChoiceLocation('전남');
          }}
        >
          전남
        </Location17>
      </LocationList>

      <p>MBTI</p>
      <MBTIList>
        <MBTI1
          mbti={MBTI}
          onClick={() => {
            onChoiceMBTI('INTJ');
          }}
        >
          INTJ
        </MBTI1>
        <MBTI2
          mbti={MBTI}
          onClick={() => {
            onChoiceMBTI('INTP');
          }}
        >
          INTP
        </MBTI2>
        <MBTI3
          mbti={MBTI}
          onClick={() => {
            onChoiceMBTI('ENTJ');
          }}
        >
          ENTJ
        </MBTI3>
        <MBTI4
          mbti={MBTI}
          onClick={() => {
            onChoiceMBTI('ENTP');
          }}
        >
          ENTP
        </MBTI4>
        <MBTI5
          mbti={MBTI}
          onClick={() => {
            onChoiceMBTI('INFJ');
          }}
        >
          INFJ
        </MBTI5>
        <MBTI6
          mbti={MBTI}
          onClick={() => {
            onChoiceMBTI('INFP');
          }}
        >
          INFP
        </MBTI6>
        <MBTI7
          mbti={MBTI}
          onClick={() => {
            onChoiceMBTI('ENFJ');
          }}
        >
          ENFJ
        </MBTI7>
        <MBTI8
          mbti={MBTI}
          onClick={() => {
            onChoiceMBTI('ENFP');
          }}
        >
          ENFP
        </MBTI8>
      </MBTIList>
      <MBTIList>
        <MBTI9
          mbti={MBTI}
          onClick={() => {
            onChoiceMBTI('ISTJ');
          }}
        >
          ISTJ
        </MBTI9>
        <MBTI10
          mbti={MBTI}
          onClick={() => {
            onChoiceMBTI('ISFJ');
          }}
        >
          ISFJ
        </MBTI10>
        <MBTI11
          mbti={MBTI}
          onClick={() => {
            onChoiceMBTI('ESTJ');
          }}
        >
          ESTJ
        </MBTI11>
        <MBTI12
          mbti={MBTI}
          onClick={() => {
            onChoiceMBTI('ESFJ');
          }}
        >
          ESFJ
        </MBTI12>
        <MBTI13
          mbti={MBTI}
          onClick={() => {
            onChoiceMBTI('ISTP');
          }}
        >
          ISTP
        </MBTI13>
        <MBTI14
          mbti={MBTI}
          onClick={() => {
            onChoiceMBTI('ISFP');
          }}
        >
          ISFP
        </MBTI14>
        <MBTI15
          mbti={MBTI}
          onClick={() => {
            onChoiceMBTI('ESTP');
          }}
        >
          ESTP
        </MBTI15>
        <MBTI16
          mbti={MBTI}
          onClick={() => {
            onChoiceMBTI('ESFP');
          }}
        >
          ESFP
        </MBTI16>
      </MBTIList>

      <br />
      <br />
      <Btns
        onClick={() => {
          onSort();
        }}
      >
        정렬
      </Btns>
      <Btns
        onClick={() => {
          onInitialState();
        }}
      >
        정렬취소
      </Btns>
    </StSortBox>
  );
}

const StSortBox = styled.div`
  margin-left: 10px;
`;

const StGenderBox = styled.div``;

const StChoiceGender = styled.button`
  width: 50px;
  margin-right: 5px;

  background-color: ${(props) => `${props.gender === '남' ? 'aqua' : 'white'}`};
`;

const StChoiceGender2 = styled.button`
  width: 50px;
  margin-right: 5px;
  background-color: ${(props) => `${props.gender === '여' ? 'aqua' : 'white'}`};
`;

const StAgeBox = styled.div``;
const StAgeBar = styled.input`
  width: 40px;
`;

const LocationList = styled.div`
  width: 100%;
  display: flex;
`;

const Location1 = styled.button`
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.location === '서울' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.location === '서울' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const Location2 = styled.button`
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.location === '경기' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.location === '경기' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const Location3 = styled.button`
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.location === '인천' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.location === '인천' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const Location4 = styled.button`
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.location === '세종' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.location === '세종' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const Location5 = styled.button`
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.location === '대전' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.location === '대전' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const Location6 = styled.button`
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.location === '대구' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.location === '대구' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const Location7 = styled.button`
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.location === '광주' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.location === '광주' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const Location8 = styled.button`
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.location === '울산' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.location === '울산' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const Location9 = styled.button`
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.location === '부산' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.location === '부산' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const Location10 = styled.button`
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.location === '제주' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.location === '제주' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const Location11 = styled.button`
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.location === '강원' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.location === '강원' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const Location12 = styled.button`
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.location === '충북' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.location === '충북' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const Location13 = styled.button`
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.location === '충남' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.location === '충남' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const Location14 = styled.button`
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.location === '경북' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.location === '경북' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const Location15 = styled.button`
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.location === '경남' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.location === '경남' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const Location16 = styled.button`
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.location === '전북' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.location === '전북' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const Location17 = styled.button`
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.location === '전남' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.location === '전남' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const MBTIList = styled.div`
  width: 100%;
  display: flex;
`;

const MBTI1 = styled.button`
  width: 50px;
  height: 20px;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.mbti === 'INTJ' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.mbti === 'INTJ' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const MBTI2 = styled.button`
  width: 50px;
  height: 20px;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.mbti === 'INTP' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.mbti === 'INTP' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const MBTI3 = styled.button`
  width: 50px;
  height: 20px;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.mbti === 'ENTJ' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.mbti === 'ENTJ' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const MBTI4 = styled.button`
  width: 50px;
  height: 20px;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.mbti === 'ENTP' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.mbti === 'ENTP' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const MBTI5 = styled.button`
  width: 50px;
  height: 20px;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.mbti === 'INFJ' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.mbti === 'INFJ' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const MBTI6 = styled.button`
  width: 50px;
  height: 20px;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.mbti === 'INFP' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.mbti === 'INFP' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const MBTI7 = styled.button`
  width: 50px;
  height: 20px;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.mbti === 'ENFJ' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.mbti === 'ENFJ' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const MBTI8 = styled.button`
  width: 50px;
  height: 20px;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.mbti === 'ENFP' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.mbti === 'ENFP' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const MBTI9 = styled.button`
  width: 50px;
  height: 20px;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.mbti === 'ISTJ' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.mbti === 'ISTJ' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const MBTI10 = styled.button`
  width: 50px;
  height: 20px;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.mbti === 'ISFJ' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.mbti === 'ISFJ' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const MBTI11 = styled.button`
  width: 50px;
  height: 20px;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.mbti === 'ESTJ' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.mbti === 'ESTJ' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const MBTI12 = styled.button`
  width: 50px;
  height: 20px;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.mbti === 'ESFJ' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.mbti === 'ESFJ' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const MBTI13 = styled.button`
  width: 50px;
  height: 20px;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.mbti === 'ISTP' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.mbti === 'ISTP' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const MBTI14 = styled.button`
  width: 50px;
  height: 20px;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.mbti === 'ISFP' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.mbti === 'ISFP' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const MBTI15 = styled.button`
  width: 50px;
  height: 20px;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.mbti === 'ESTP' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.mbti === 'ESTP' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const MBTI16 = styled.button`
  width: 50px;
  height: 20px;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  background-color: ${(props) => `${props.mbti === 'ESFP' ? '#50586C' : '#DCE2F0'}`};
  color: ${(props) => `${props.mbti === 'ESFP' ? '#DCE2F0' : '#50586C'}`};
  cursor: pointer;
`;

const Btns = styled.button`
  margin-right: 20px;
`;
