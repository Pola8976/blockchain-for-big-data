import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngestComponent } from './ingest/ingest.component';

const routes: Routes = [{ path: 'ingest', component: IngestComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
