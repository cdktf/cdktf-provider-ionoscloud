// https://www.terraform.io/docs/providers/ionoscloud/d/location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIonoscloudLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/location#feature DataIonoscloudLocation#feature}
  */
  readonly feature?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/location#name DataIonoscloudLocation#name}
  */
  readonly name?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/location#timeouts DataIonoscloudLocation#timeouts}
  */
  readonly timeouts?: DataIonoscloudLocationTimeouts;
}
export interface DataIonoscloudLocationCpuArchitecture {
}

export function dataIonoscloudLocationCpuArchitectureToTerraform(struct?: DataIonoscloudLocationCpuArchitecture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataIonoscloudLocationCpuArchitectureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIonoscloudLocationCpuArchitecture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIonoscloudLocationCpuArchitecture | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_family - computed: true, optional: false, required: false
  public get cpuFamily() {
    return this.getStringAttribute('cpu_family');
  }

  // max_cores - computed: true, optional: false, required: false
  public get maxCores() {
    return this.getNumberAttribute('max_cores');
  }

  // max_ram - computed: true, optional: false, required: false
  public get maxRam() {
    return this.getNumberAttribute('max_ram');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
}

export class DataIonoscloudLocationCpuArchitectureList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataIonoscloudLocationCpuArchitectureOutputReference {
    return new DataIonoscloudLocationCpuArchitectureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIonoscloudLocationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/location#create DataIonoscloudLocation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/location#default DataIonoscloudLocation#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/location#delete DataIonoscloudLocation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/d/location#update DataIonoscloudLocation#update}
  */
  readonly update?: string;
}

export function dataIonoscloudLocationTimeoutsToTerraform(struct?: DataIonoscloudLocationTimeoutsOutputReference | DataIonoscloudLocationTimeouts | cdktf.IResolvable): any {
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

export class DataIonoscloudLocationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIonoscloudLocationTimeouts | undefined {
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

  public set internalValue(value: DataIonoscloudLocationTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/ionoscloud/d/location ionoscloud_location}
*/
export class DataIonoscloudLocation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_location";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/ionoscloud/d/location ionoscloud_location} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIonoscloudLocationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIonoscloudLocationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_location',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.2.0',
        providerVersionConstraint: '~> 6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._feature = config.feature;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_architecture - computed: true, optional: false, required: false
  private _cpuArchitecture = new DataIonoscloudLocationCpuArchitectureList(this, "cpu_architecture", false);
  public get cpuArchitecture() {
    return this._cpuArchitecture;
  }

  // feature - computed: false, optional: true, required: false
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  public resetFeature() {
    this._feature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_aliases - computed: true, optional: false, required: false
  public get imageAliases() {
    return this.getListAttribute('image_aliases');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataIonoscloudLocationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataIonoscloudLocationTimeouts) {
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
      feature: cdktf.stringToTerraform(this._feature),
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataIonoscloudLocationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
