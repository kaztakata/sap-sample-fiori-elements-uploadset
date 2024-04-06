import ExtensionAPI from "sap/fe/core/ExtensionAPI";
import UploadSet from "sap/m/upload/UploadSet";
import UploadSetItem from "sap/m/upload/UploadSetItem";
import ODataModel from "sap/ui/model/odata/v4/ODataModel";
import Item from "sap/ui/core/Item";
import { UploadSet$AfterItemAddedEvent } from "sap/m/upload/UploadSet";
import { UploadSetItem$OpenPressedEvent } from "sap/m/upload/UploadSetItem";

export async function onAfterItemAdded(this: ExtensionAPI, event: UploadSet$AfterItemAddedEvent) {
    const model = this.getModel() as ODataModel;
    const item = event.getParameters().item as UploadSetItem;
    const uploadSet = this.byId("UploadSet") as UploadSet;
    const serviceUrl = model.getServiceUrl().replace(/\/$/, ""); // remove last slash if exist

    const path = this.getRouting().getView().getBindingContext()?.getPath(); 
    const binding = model.bindList(`${path}/attachments`);
    const attachment = binding.create({name: item.getFileName()});
    await attachment.created();
    
    item.setUploadUrl(`${serviceUrl}${path}/attachments('${attachment.getObject().ID}')/content`);
    item.addHeaderField(new Item({key: "X-CSRF-Token", text: model.getHttpHeaders()["X-CSRF-Token"]}));    
    uploadSet.uploadItem(item);
}

export function onUploadCompleted(this: ExtensionAPI) {
    const model = this.getModel() as ODataModel;
    model.refresh();
}

export function onOpenPressed(this: ExtensionAPI, event: UploadSetItem$OpenPressedEvent) {
    event.preventDefault();
    const model = this.getModel() as ODataModel;
    const serviceUrl = model.getServiceUrl();    
    const item = event.getParameters().item as UploadSetItem;
    const url = item.getUrl();
    item.setUrl(url.replace("serviceUrl/", serviceUrl));
    item.download(false);
}