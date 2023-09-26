import localFont from 'next/font/local';

const RobotoCondensed = localFont({
 src: [
  {
   path: './RobotoCondensed/RobotoCondensed-Light.ttf',
   weight: '300',
   style: 'normal',
  },
  {
   path: './RobotoCondensed/RobotoCondensed-Regular.ttf',
   weight: '400',
   style: 'normal',
  },
  {
   path: './RobotoCondensed/RobotoCondensed-Bold.ttf',
   weight: '700',
   style: 'normal',
  },
 ],
 variable: '--font-robotoCondensed',
});

export default RobotoCondensed;
