import React from 'react';
import {DraggableBottomSheetProvider} from './DraggableBottomSheetProvider';
import AppDraggableBottom from './AppDraggableBottom';

export interface IDraggableBottomProps {
  HeaderBottomSheetComponent?: React.JSX.Element;
  BodyBottomSheetComponent?: React.JSX.Element;
  FooterBottoomSheetComponent?: React.JSX.Element;
  showBottomSheet?: boolean;
  setShowBottomSheet?: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppDraggaleBottomSheet = (props: IDraggableBottomProps) => {
  return (
    <DraggableBottomSheetProvider
      value={{
        showBottomSheet: props.showBottomSheet,
        setShowBottomSheet: props.setShowBottomSheet,
      }}>
      <AppDraggableBottom
        HeaderBottomSheetComponent={props.HeaderBottomSheetComponent}
        BodyBottomSheetComponent={props.BodyBottomSheetComponent}
        FooterBottoomSheetComponent={props.FooterBottoomSheetComponent}
      />
    </DraggableBottomSheetProvider>
  );
};

export default AppDraggaleBottomSheet;
