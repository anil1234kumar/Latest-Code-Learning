import { FC } from 'react';
import { WrapperOnBoardingProps } from './wrapperOnBoarding.type';
import {
  CommanWrapperOnBoarding,
  FormOuterWrapper,
  ImageWrapper,
} from './wrapperOnBoarding.styles';
import { Col, Row } from 'antd';
import { FormCard } from '../customCard';
// import StoreImages from '../../asset/imageStore/AllImages';

const WrapperOnBoarding: FC<WrapperOnBoardingProps> = (props) => {
  const { children, img } = props;
  // const {SIGNUP} = StoreImages

  return (
    <CommanWrapperOnBoarding>
      <Row align="middle" gutter={[16, 16]}>
        <Col style={{ paddingLeft: '0' }} lg={12}>
          <ImageWrapper>
            <img src={img} alt="img" />
          </ImageWrapper>
        </Col>
        <Col lg={12}>
          <FormOuterWrapper>
            <FormCard>{children}</FormCard>
          </FormOuterWrapper>
        </Col>
      </Row>
    </CommanWrapperOnBoarding>
  );
};

export default WrapperOnBoarding;
