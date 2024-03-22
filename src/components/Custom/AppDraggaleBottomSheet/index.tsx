import React, {ReactNode} from 'react';
import {DraggableBottomSheetProvider} from './DraggableBottomSheetProvider';
import AppDraggableBottom from './AppDraggableBottom';

export interface IDraggableBottomProps {
  HeaderBottomSheetComponent?: React.ReactElement;
  BodyBottomSheetComponent?: React.JSX.Element;
  FooterBottoomSheetComponent?: React.JSX.Element;
  showBottomSheet?: boolean;
  setShowBottomSheet?: React.Dispatch<React.SetStateAction<boolean>>;
  maxHeightBottomSheet?: '100%' | '70%';
}

const AppDraggaleBottomSheet = ({
  showBottomSheet,
  setShowBottomSheet,
  HeaderBottomSheetComponent,
  BodyBottomSheetComponent,
  FooterBottoomSheetComponent,
  maxHeightBottomSheet,
}: IDraggableBottomProps) => {
  return (
    <DraggableBottomSheetProvider
      value={{
        maxHeightBottomSheet,
        showBottomSheet: showBottomSheet,
        setShowBottomSheet: setShowBottomSheet,
      }}>
      <AppDraggableBottom
        HeaderBottomSheetComponent={HeaderBottomSheetComponent}
        BodyBottomSheetComponent={BodyBottomSheetComponent}
        FooterBottoomSheetComponent={FooterBottoomSheetComponent}
        maxHeightBottomSheet={maxHeightBottomSheet}
      />
    </DraggableBottomSheetProvider>
  );
};

export default AppDraggaleBottomSheet;
