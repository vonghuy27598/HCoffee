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

const AppDraggaleBottomSheet = ({
  showBottomSheet,
  setShowBottomSheet,
  HeaderBottomSheetComponent,
  BodyBottomSheetComponent,
  FooterBottoomSheetComponent,
}: IDraggableBottomProps) => {
  return (
    <DraggableBottomSheetProvider
      value={{
        showBottomSheet: showBottomSheet,
        setShowBottomSheet: setShowBottomSheet,
      }}>
      <AppDraggableBottom
        HeaderBottomSheetComponent={HeaderBottomSheetComponent}
        BodyBottomSheetComponent={BodyBottomSheetComponent}
        FooterBottoomSheetComponent={FooterBottoomSheetComponent}
      />
    </DraggableBottomSheetProvider>
  );
};

export default AppDraggaleBottomSheet;
