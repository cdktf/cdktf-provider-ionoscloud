// https://www.terraform.io/docs/providers/ionoscloud/r/k8s_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access to the K8s API server is restricted to these CIDRs. Cluster-internal traffic is not affected by this restriction. If no allowlist is specified, access is not restricted. If an IP without subnet mask is provided, the default value will be used: 32 for IPv4 and 128 for IPv6.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_cluster#api_subnet_allow_list K8SCluster#api_subnet_allow_list}
  */
  readonly apiSubnetAllowList?: string[];
  /**
  * The desired kubernetes version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_cluster#k8s_version K8SCluster#k8s_version}
  */
  readonly k8SVersion?: string;
  /**
  * The desired name for the cluster
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_cluster#name K8SCluster#name}
  */
  readonly name: string;
  /**
  * List of versions that may be used for node pools under this cluster
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_cluster#viable_node_pool_versions K8SCluster#viable_node_pool_versions}
  */
  readonly viableNodePoolVersions?: string[];
  /**
  * maintenance_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_cluster#maintenance_window K8SCluster#maintenance_window}
  */
  readonly maintenanceWindow?: K8SClusterMaintenanceWindow;
  /**
  * s3_buckets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_cluster#s3_buckets K8SCluster#s3_buckets}
  */
  readonly s3Buckets?: K8SClusterS3Buckets[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_cluster#timeouts K8SCluster#timeouts}
  */
  readonly timeouts?: K8SClusterTimeouts;
}
export interface K8SClusterMaintenanceWindow {
  /**
  * Day of the week when maintenance is allowed
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_cluster#day_of_the_week K8SCluster#day_of_the_week}
  */
  readonly dayOfTheWeek: string;
  /**
  * A clock time in the day when maintenance is allowed
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_cluster#time K8SCluster#time}
  */
  readonly time: string;
}

export function k8SClusterMaintenanceWindowToTerraform(struct?: K8SClusterMaintenanceWindowOutputReference | K8SClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_the_week: cdktf.stringToTerraform(struct!.dayOfTheWeek),
    time: cdktf.stringToTerraform(struct!.time),
  }
}

export class K8SClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfTheWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfTheWeek = this._dayOfTheWeek;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfTheWeek = undefined;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfTheWeek = value.dayOfTheWeek;
      this._time = value.time;
    }
  }

  // day_of_the_week - computed: false, optional: false, required: true
  private _dayOfTheWeek?: string; 
  public get dayOfTheWeek() {
    return this.getStringAttribute('day_of_the_week');
  }
  public set dayOfTheWeek(value: string) {
    this._dayOfTheWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfTheWeekInput() {
    return this._dayOfTheWeek;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface K8SClusterS3Buckets {
  /**
  * Name of the S3 bucket
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_cluster#name K8SCluster#name}
  */
  readonly name?: string;
}

export function k8SClusterS3BucketsToTerraform(struct?: K8SClusterS3Buckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface K8SClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_cluster#create K8SCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_cluster#default K8SCluster#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_cluster#delete K8SCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_cluster#update K8SCluster#update}
  */
  readonly update?: string;
}

export function k8SClusterTimeoutsToTerraform(struct?: K8SClusterTimeoutsOutputReference | K8SClusterTimeouts | cdktf.IResolvable): any {
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

export class K8SClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterTimeouts | undefined {
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

  public set internalValue(value: K8SClusterTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_cluster ionoscloud_k8s_cluster}
*/
export class K8SCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_k8s_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/ionoscloud/r/k8s_cluster ionoscloud_k8s_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SClusterConfig
  */
  public constructor(scope: Construct, id: string, config: K8SClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_k8s_cluster',
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
    this._apiSubnetAllowList = config.apiSubnetAllowList;
    this._k8SVersion = config.k8SVersion;
    this._name = config.name;
    this._viableNodePoolVersions = config.viableNodePoolVersions;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._s3Buckets = config.s3Buckets;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_subnet_allow_list - computed: false, optional: true, required: false
  private _apiSubnetAllowList?: string[]; 
  public get apiSubnetAllowList() {
    return this.getListAttribute('api_subnet_allow_list');
  }
  public set apiSubnetAllowList(value: string[]) {
    this._apiSubnetAllowList = value;
  }
  public resetApiSubnetAllowList() {
    this._apiSubnetAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSubnetAllowListInput() {
    return this._apiSubnetAllowList;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // k8s_version - computed: true, optional: true, required: false
  private _k8SVersion?: string; 
  public get k8SVersion() {
    return this.getStringAttribute('k8s_version');
  }
  public set k8SVersion(value: string) {
    this._k8SVersion = value;
  }
  public resetK8SVersion() {
    this._k8SVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SVersionInput() {
    return this._k8SVersion;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // viable_node_pool_versions - computed: true, optional: true, required: false
  private _viableNodePoolVersions?: string[]; 
  public get viableNodePoolVersions() {
    return this.getListAttribute('viable_node_pool_versions');
  }
  public set viableNodePoolVersions(value: string[]) {
    this._viableNodePoolVersions = value;
  }
  public resetViableNodePoolVersions() {
    this._viableNodePoolVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viableNodePoolVersionsInput() {
    return this._viableNodePoolVersions;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new K8SClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: K8SClusterMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // s3_buckets - computed: false, optional: true, required: false
  private _s3Buckets?: K8SClusterS3Buckets[] | cdktf.IResolvable; 
  public get s3Buckets() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('s3_buckets');
  }
  public set s3Buckets(value: K8SClusterS3Buckets[] | cdktf.IResolvable) {
    this._s3Buckets = value;
  }
  public resetS3Buckets() {
    this._s3Buckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketsInput() {
    return this._s3Buckets;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new K8SClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: K8SClusterTimeouts) {
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
      api_subnet_allow_list: cdktf.listMapper(cdktf.stringToTerraform)(this._apiSubnetAllowList),
      k8s_version: cdktf.stringToTerraform(this._k8SVersion),
      name: cdktf.stringToTerraform(this._name),
      viable_node_pool_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._viableNodePoolVersions),
      maintenance_window: k8SClusterMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      s3_buckets: cdktf.listMapper(k8SClusterS3BucketsToTerraform)(this._s3Buckets),
      timeouts: k8SClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
