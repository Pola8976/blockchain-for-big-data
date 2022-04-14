import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksComponent } from './blocks/blocks.component';
import { IngestComponent } from './ingest/ingest.component';

const routes: Routes = [
  { path: 'ingest', component: IngestComponent },
  { path: 'blocks', component: BlocksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
