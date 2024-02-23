import ExtensionAPI from 'sap/fe/core/ExtensionAPI'
import UI5Event from 'sap/ui/base/Event'
import UploadSet from 'sap/m/upload/UploadSet'
import UploadSetItem from 'sap/m/upload/UploadSetItem'
import ODataModel from 'sap/ui/model/odata/v4/ODataModel'
import UploaderHttpRequestMethod from 'sap/m/upload/UploaderHttpRequestMethod'
import Item from 'sap/ui/core/Item'

export async function onAfterItemAdded(this: ExtensionAPI, event: UI5Event) {
    const model: ODataModel = this.getModel()
    const item: UploadSetItem = event.getParameters()?.item
    const uploadSet: UploadSet = this.byId('UploadSet')

    const path = this.getIntentBasedNavigation().getView().getBindingContext()?.getPath() 
    const binding = model.bindList(`${path}/attachments`)
    const attachment = binding.create({name: item.getFileName()})
    await attachment.created()
    
    item.setUploadUrl(`/odata/v4/user/Attachments('${attachment.getObject().ID}')/content`)
    item.addHeaderField(new Item({key: "X-CSRF-Token", text: model.getHttpHeaders()['X-CSRF-Token']}))    
    uploadSet.setHttpRequestMethod('PUT' as UploaderHttpRequestMethod)
    uploadSet.uploadItem(item);
}

export function onUploadCompleted(this: ExtensionAPI, event: UI5Event) {
    const model: ODataModel = this.getModel()
    model.refresh()
}