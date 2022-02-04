import { ErrorHandler } from "@angular/core";
import { openModal } from "../components/modal/modal.component";

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        openModal();
    }
}