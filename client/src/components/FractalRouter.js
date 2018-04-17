import fractalGenerator from './drawings/fractalGenerator';

//mport julia from './drawings/julia';


const fractalRouter = {

  main: (node, drawing) => {

    switch (drawing) {
        case 'mandelbrot':
        fractalGenerator.createFractal(0, 0, 'M', -2.4,1, -1.5, 1.5);
        break;
        case 'julia1':
        fractalGenerator.createFractal(-0.79, 0.15, 'J', -1.5,1.5, -1.5, 1.5);;
        break;
        case 'julia2':
        fractalGenerator.createFractal(-0.162, 1.04, 'J', -1.5,1.5, -1.5, 1.5);;
        break;
        case 'julia3':
        fractalGenerator.createFractal(.3, -.01, 'J', -1.5,1.5, -1.5, 1.5);;
        break;
        case 'julia4':
        fractalGenerator.createFractal(-1.476, 0, 'J', -1.5,1.5, -1.5, 1.5);;
        break;
        case 'julia5':
        fractalGenerator.createFractal(-.12, -.77, 'J', -1.5,1.5, -1.5, 1.5);;
        break;
        case 'julia6':
        fractalGenerator.createFractal(.28, .008, 'J', -1.5,1.5, -1.5, 1.5);;
        break;
        case 'julia7':
        fractalGenerator.createFractal(-0.4, 0.6, 'J', -1.5,1.5, -1.5, 1.5);;
        break;
        case 'julia8':
        fractalGenerator.createFractal(-0.70176, -0.3842, 'J', -1.5,1.5, -1.5, 1.5);;
        break;
        case 'julia9':
        fractalGenerator.createFractal(-0.835, -0.2321, 'J', -1.5,1.5, -1.5, 1.5);;
        break;
        case 'julia10':
        fractalGenerator.createFractal(-0.7269, 0.1889, 'J', -1.5,1.5, -1.5, 1.5);;
        break;
        case 'julia11':
        fractalGenerator.createFractal(0, -0.8, 'J', -1.5,1.5, -1.5, 1.5);;
        break;
      default:
      fractalGenerator.createFractal(0, 0, 'M');

        break;
    }
  }
}
export default fractalRouter;