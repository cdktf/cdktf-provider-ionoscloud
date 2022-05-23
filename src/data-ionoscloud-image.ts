// https://www.terraform.io/docs/providers/ionoscloud/d/image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIonoscloudImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/image#cloud_init DataIonoscloudImage#cloud_init}
  */
  readonly cloudInit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/image#description DataIonoscloudImage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/image#location DataIonoscloudImage#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/image#name DataIonoscloudImage#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/image#type DataIonoscloudImage#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/image#version DataIonoscloudImage#version}
  */
  readonly version?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/image#timeouts DataIonoscloudImage#timeouts}
  */
  readonly timeouts?: DataIonoscloudImageTimeouts;
}
export interface DataIonoscloudImageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/image#create DataIonoscloudImage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/image#default DataIonoscloudImage#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/image#delete DataIonoscloudImage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/image#update DataIonoscloudImage#update}
  */
  readonly update?: string;
}

export function dataIonoscloudImageTimeoutsToTerraform(struct?: DataIonoscloudImageTimeoutsOutputReference | DataIonoscloudImageTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DataIonoscloudImageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIonoscloudImageTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIonoscloudImageTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/ionoscloud/d/image ionoscloud_image}
*/
export class DataIonoscloudImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_image";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/ionoscloud/d/image ionoscloud_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIonoscloudImageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIonoscloudImageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_image',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.2.5',
        providerVersionConstraint: '~> 6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cloudInit = config.cloudInit;
    this._description = config.description;
    this._location = config.location;
    this._name = config.name;
    this._type = config.type;
    this._version = config.version;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_init - computed: true, optional: true, required: false
  private _cloudInit?: string; 
  public get cloudInit() {
    return this.getStringAttribute('cloud_init');
  }
  public set cloudInit(value: string) {
    this._cloudInit = value;
  }
  public resetCloudInit() {
    this._cloudInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitInput() {
    return this._cloudInit;
  }

  // cpu_hot_plug - computed: true, optional: false, required: false
  public get cpuHotPlug() {
    return this.getBooleanAttribute('cpu_hot_plug');
  }

  // cpu_hot_unplug - computed: true, optional: false, required: false
  public get cpuHotUnplug() {
    return this.getBooleanAttribute('cpu_hot_unplug');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disc_scsi_hot_plug - computed: true, optional: false, required: false
  public get discScsiHotPlug() {
    return this.getBooleanAttribute('disc_scsi_hot_plug');
  }

  // disc_scsi_hot_unplug - computed: true, optional: false, required: false
  public get discScsiHotUnplug() {
    return this.getBooleanAttribute('disc_scsi_hot_unplug');
  }

  // disc_virtio_hot_plug - computed: true, optional: false, required: false
  public get discVirtioHotPlug() {
    return this.getBooleanAttribute('disc_virtio_hot_plug');
  }

  // disc_virtio_hot_unplug - computed: true, optional: false, required: false
  public get discVirtioHotUnplug() {
    return this.getBooleanAttribute('disc_virtio_hot_unplug');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_aliases - computed: true, optional: false, required: false
  public get imageAliases() {
    return this.getListAttribute('image_aliases');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nic_hot_plug - computed: true, optional: false, required: false
  public get nicHotPlug() {
    return this.getBooleanAttribute('nic_hot_plug');
  }

  // nic_hot_unplug - computed: true, optional: false, required: false
  public get nicHotUnplug() {
    return this.getBooleanAttribute('nic_hot_unplug');
  }

  // public - computed: true, optional: false, required: false
  public get public() {
    return this.getBooleanAttribute('public');
  }

  // ram_hot_plug - computed: true, optional: false, required: false
  public get ramHotPlug() {
    return this.getBooleanAttribute('ram_hot_plug');
  }

  // ram_hot_unplug - computed: true, optional: false, required: false
  public get ramHotUnplug() {
    return this.getBooleanAttribute('ram_hot_unplug');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataIonoscloudImageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataIonoscloudImageTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_init: cdktf.stringToTerraform(this._cloudInit),
      description: cdktf.stringToTerraform(this._description),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.stringToTerraform(this._version),
      timeouts: dataIonoscloudImageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
