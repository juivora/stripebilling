import './App.css';
import styled from 'styled-components'
import LeftComponent from './component/LeftComponent/LeftComponent';
import RightComponent from './component/RightComponent/RightComponent';
import TableDataState from './context/table/TableDataState';


function App() {
  const Box = styled.div({
    borderTopLeftRadius: '100px',
    borderLeftColor: 'coral',
    padding: '100px',
  });

  const VerticalLine = styled.div({
    borderLeft: '1px solid #192e4d',
    height: '100%',
    position: 'absolute',
    left: '16.67%',
    marginLeft: '-3px',
    top: '0',
  });

  const MainSectionWrapper = styled.section({
    left: '14%',
    paddingRight: '16px',
    position: 'absolute',
    width: '100%',
    maxWidth: '1080px',
    margin: '0 16px',
  })

  const VerticalLine1 = styled.div({
    borderLeft: '1px dashed #192e4d',
    height: '100%',
    position: 'absolute',
    left: '33.33%',
    marginLeft: '-3px',
    top: '0',
  });

  const VerticalLine2 = styled.div({
    borderLeft: '1px dashed #192e4d',
    height: '100%',
    position: 'absolute',
    left: '50%',
    marginLeft: '-3px',
    top: '0',
  });

  const VerticalLine3 = styled.div({
    borderLeft: '1px dashed #192e4d',
    height: '100%',
    position: 'absolute',
    left: '66.67%',
    marginLeft: '-3px',
    top: '0',
  });

  const VerticalLine4 = styled.div({
    borderLeft: '1px solid #192e4d',
    height: '100%',
    position: 'absolute',
    left: '83.34%',
    marginLeft: '-3px',
    top: '0',
  });


  return (
    <>
      <TableDataState>
        <Box>
          <VerticalLine />
          <VerticalLine1 />
          <VerticalLine2 />
          <VerticalLine3 />
          <VerticalLine4 />
          <MainSectionWrapper className="grid grid-cols-2 gap-1 justify-evenly">
            <LeftComponent />
            <RightComponent />
          </MainSectionWrapper>
        </Box>
      </TableDataState>
    </>
  )
}

export default App;
