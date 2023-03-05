import BaseLayout from '../components/layouts/BaseLayout';
import styled from 'styled-components';
import Button from '../components/Button';
import {useState} from "react";
import axios from "axios";

export default function Contact() {
    const [content, setContent] = useState(`아래 내용을 상세히 입력해 주시면, 더 정확하게 안내해 드리겠습니다. 준비된 내용이 없으시다면 그냥 바로 상담원 연결 신청을 하셔도 됩니다.

1. 프로젝트 개요
프로젝트 목적, 타겟 고객, 진행 계획 등

2. 상세 업무 내용
프로그램/서비스 용도, 주요 기능, 메뉴 구성, 작업 분량, 필요한 조건 등

3. 희망 기술 & 관련 경험
사용을 희망하는 기술 또는 개발스택 필요한 특정 분야 또는 개발 경험

4. 유의 사항
필수 요건, 희망 계약 방식 등

5. 참고 서비스/사이트
디자인, 기능 등 참고 서비스/사이트 기재`);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('');
    const [grants, setGrants] = useState('');
    const [type, setType] = useState('');
    const [budgets, setBudgets] = useState('');
    const [password, setPassword] = useState('');
    return (
        <BaseLayout>
            <BgContainer>
                <Container>
                    <SubTitle1>프로젝트 문의하기</SubTitle1>
                    <FormContainer>
                        <form className="p-4" onSubmit={async (event) => {
                            event.preventDefault();
                            await axios.post('https://api.grotesq.com/contacts', {
                                email: email,
                                phone: phone,
                                content: `신규 서비스 여부 : ${service}\n정부 지원금 여부 : ${grants}\n서비스 종류 : ${type}\n예산 범위 : ${budgets}만원\n\n${content}}`,
                                password: password,
                            });
                            alert('문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.');
                        }}>
                            <h3 className="text-left text-lg font-bold mb-4 text-black">1. 저희가 회신 드릴 수 있는 정보를 입력해주세요</h3>
                            <Input className="mb-4 text-gray-700" type="text" placeholder="이름/회사명" value={name}
                                   onChange={event => setName(event.target.value)}/>
                            <Input className="mb-4 text-gray-700" type="text" placeholder="연락처" value={phone}
                                   onChange={event => setPhone(event.target.value)}/>
                            <Input className="mb-4 text-gray-700" type="text" placeholder="이메일" value={email}
                                   onChange={event => setEmail(event.target.value)}/>

                            <h3 className="text-left text-lg font-bold mb-4 text-black">2. 신규 서비스를 준비중이신가요?<br/>기존 서비스를 개선/리뉴얼 하시려고
                                하시나요?</h3>
                            <div className="text-left mb-4">
                                <label htmlFor="new" className="mr-8 text-gray-700">
                                    <input type="radio" className="mr-2 text-gray-700" id="new" name="service" value="new"
                                           checked={service === 'new'}
                                           onChange={() => setService('new')}/>
                                    신규 서비스를 준비중입니다
                                </label>
                                <label htmlFor="renew" className="text-gray-700">
                                    <input type="radio" className="mr-2 text-gray-700" id="renew" name="service" value="renew"
                                           checked={service === 'renew'}
                                           onChange={() => setService('renew')}/>
                                    기존 서비스가 있습니다.
                                </label>
                            </div>

                            <h3 className="text-left text-lg font-bold mb-4 text-black">3. 정부 지원금을 사용하실 계획이신가요?</h3>
                            <div className="text-left mb-4">
                                <label htmlFor="grants" className="mr-8 text-gray-700">
                                    <input type="radio" className="mr-2" id="grants" name="grants" value="grants"
                                           checked={grants === 'grants'}
                                           onChange={() => setGrants('grants')}/>
                                    예
                                </label>
                                <label htmlFor="not-grants" className={'text-gray-700'}>
                                    <input type="radio" className="mr-2" id="not-grants" name="grants"
                                           value="not-grants"
                                           checked={grants === 'not-grants'}
                                           onChange={() => setGrants('not-grants')}/>
                                    아니오
                                </label>
                            </div>

                            <h3 className="text-left text-lg font-bold mb-4 text-black">4. 어떤 종류의 서비스를 개발하시려고 하시나요?</h3>
                            <Input className="mb-4 text-gray-700" type="text"
                                   placeholder="예)커뮤니티, 매칭 플랫폼, 예약 플랫폼, 중개 서비스, 쇼핑몰, 복합적인 서비스, 기타..."
                                   value={type} onChange={event => setType(event.target.value)}
                            />

                            <h3 className="text-left text-lg font-bold mb-4 text-black">5. 어느정도 예산 범위를 가지고 계신가요?</h3>
                            <div className="flex">
                                <Input className="mb-4 text-right text-gray-700" type="text" placeholder=""
                                       value={budgets} onChange={event => setBudgets(event.target.value)}
                                />
                                <div className="px-4 py-4 text-gray-700">만원</div>
                            </div>

                            <h3 className="text-left text-lg font-bold mb-4 text-black">6. 상세 내용</h3>
                            <TextArea placeholder="문의 내용" rows={14}
                                      onChange={event => setContent(event.target.value)}
                                      className={'text-gray-700'}
                            >{content}</TextArea>
                            <div className="mb-4"/>

                            <input type="text" name="password" className="absolute -top-full -left-full"
                                   value={password} onChange={event => setPassword(event.target.value)}
                            />

                            <Button className="transition ease-in-out hover:bg-primary-blue-light" size="md" round>
                                프로젝트 문의하기
                            </Button>
                        </form>
                    </FormContainer>
                </Container>
            </BgContainer>
        </BaseLayout>
    );
}

const Container = styled.section`
  ${({theme}) => theme.flexCenter};
  flex-direction: column;
  padding-top: 7.435rem;
  padding-bottom: 4.437rem;
  width: 100%;
  @media ${({theme}) => theme.mediaQueryMax('sm')} {
    padding-top: 3.75rem;
    padding-bottom: 0;
  }
`;

const SubTitle1 = styled.h1`
  ${({theme}) => theme.subTitle1Light};
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
`;

const BgContainer = styled.section`
  ${({theme}) => theme.flexCenter};
  background: ${(props) => props.theme.background['gradient80']}, url('/assets/image/main/introduce/background-1.jpg');

  @supports (background-image: -webkit-image-set(url('/assets/image/main/introduce/background-1.webp') 1x)) {
    background-image: ${(props) => props.theme.background['gradient80']},
    -webkit-image-set(url('/assets/image/main/introduce/background-1.webp') 1x);
  }
  background-size: cover;
  color: ${(props) => props.theme.color['white']};
`;

const FormContainer = styled.div`
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 30px 10px;
`;
