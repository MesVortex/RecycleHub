import { HttpInterceptorFn } from '@angular/common/http';

export const testIterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
