import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "customNumber"
})
export class CustomNumber extends DecimalPipe implements PipeTransform {
    transform(value): string {
        const ONE_MILLION = 1000000;
        const ONE_THOUSAND = 1000;
        let pipedVal = value;
        if (pipedVal >= ONE_MILLION) {
            pipedVal = pipedVal / ONE_MILLION;
            pipedVal = (new DecimalPipe("en-US")).transform(pipedVal.toFixed(2)) + "M";
        } else if (pipedVal < ONE_MILLION && pipedVal >= ONE_THOUSAND) {
            pipedVal = pipedVal / ONE_THOUSAND;
            pipedVal = (new DecimalPipe("en-US")).transform(pipedVal.toFixed(2)) + "K";
        }
        return pipedVal;
    }
}