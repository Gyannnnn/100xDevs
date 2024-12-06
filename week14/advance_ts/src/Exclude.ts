type Eventtype = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Eventtype, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK