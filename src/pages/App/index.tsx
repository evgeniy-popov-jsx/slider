import { ToolBar } from './components/toolbar'
import { Styled } from './styles'

function App() {

  return (
    <Styled.Container>
      <Styled.SliderContainer>
        <Styled.SlidesWrapper>
          <Styled.Slide $bgColor='purple'>1</Styled.Slide>
          <Styled.Slide $bgColor='green'>2</Styled.Slide>
          <Styled.Slide $bgColor='blue'>3</Styled.Slide>
        </Styled.SlidesWrapper>
      </Styled.SliderContainer>
      <ToolBar />
    </Styled.Container>
  )
}

export default App
