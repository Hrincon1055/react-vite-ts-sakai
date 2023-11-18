import { Button } from 'primereact/button';
export function User() {
  return (
    <div className='card flex justify-content-center gap-3'>
      <Button label='Primary' />
      <Button label='Secondary' severity='secondary' />
      <Button label='Success' severity='success' />
      <Button label='Info' severity='info' />
      <Button label='Warning' severity='warning' />
      <Button label='Help' severity='help' />
      <Button label='Danger' severity='danger' />
    </div>
  );
}
