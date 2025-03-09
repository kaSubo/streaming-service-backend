import { DynamicModule, Module } from '@nestjs/common';
import { StripeService } from './stripe.service';
import {
  StripeOptionsSymbol,
  TStripeAsyncOptions,
  TStripeOptions,
} from './types/stripe.types';

@Module({})
export class StripeModule {
  public static register(options: TStripeOptions): DynamicModule {
    return {
      module: StripeModule,
      providers: [
        {
          provide: StripeOptionsSymbol,
          useValue: options,
        },
        StripeService,
      ],
      exports: [StripeService],
      global: true,
    };
  }

  public static registerAsync(options: TStripeAsyncOptions): DynamicModule {
    return {
      module: StripeModule,
      imports: options.imports || [],
      providers: [
        {
          provide: StripeOptionsSymbol,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
        StripeService,
      ],
      exports: [StripeService],
      global: true,
    };
  }
}
