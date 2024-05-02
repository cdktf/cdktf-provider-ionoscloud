# `k8SCluster` Submodule <a name="`k8SCluster` Submodule" id="@cdktf/provider-ionoscloud.k8SCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### K8SCluster <a name="K8SCluster" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster ionoscloud_k8s_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/k8scluster"

k8scluster.NewK8SCluster(scope Construct, id *string, config K8SClusterConfig) K8SCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig">K8SClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig">K8SClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putS3Buckets">PutS3Buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetAllowReplace">ResetAllowReplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetApiSubnetAllowList">ResetApiSubnetAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetK8SVersion">ResetK8SVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetNatGatewayIp">ResetNatGatewayIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetNodeSubnet">ResetNodeSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetPublic">ResetPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetS3Buckets">ResetS3Buckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putMaintenanceWindow"></a>

```go
func PutMaintenanceWindow(value K8SClusterMaintenanceWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow">K8SClusterMaintenanceWindow</a>

---

##### `PutS3Buckets` <a name="PutS3Buckets" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putS3Buckets"></a>

```go
func PutS3Buckets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putS3Buckets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putTimeouts"></a>

```go
func PutTimeouts(value K8SClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts">K8SClusterTimeouts</a>

---

##### `ResetAllowReplace` <a name="ResetAllowReplace" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetAllowReplace"></a>

```go
func ResetAllowReplace()
```

##### `ResetApiSubnetAllowList` <a name="ResetApiSubnetAllowList" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetApiSubnetAllowList"></a>

```go
func ResetApiSubnetAllowList()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetK8SVersion` <a name="ResetK8SVersion" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetK8SVersion"></a>

```go
func ResetK8SVersion()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetNatGatewayIp` <a name="ResetNatGatewayIp" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetNatGatewayIp"></a>

```go
func ResetNatGatewayIp()
```

##### `ResetNodeSubnet` <a name="ResetNodeSubnet" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetNodeSubnet"></a>

```go
func ResetNodeSubnet()
```

##### `ResetPublic` <a name="ResetPublic" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetPublic"></a>

```go
func ResetPublic()
```

##### `ResetS3Buckets` <a name="ResetS3Buckets" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetS3Buckets"></a>

```go
func ResetS3Buckets()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a K8SCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/k8scluster"

k8scluster.K8SCluster_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/k8scluster"

k8scluster.K8SCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/k8scluster"

k8scluster.K8SCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/k8scluster"

k8scluster.K8SCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a K8SCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the K8SCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing K8SCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the K8SCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference">K8SClusterMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.s3Buckets">S3Buckets</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList">K8SClusterS3BucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference">K8SClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.viableNodePoolVersions">ViableNodePoolVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.allowReplaceInput">AllowReplaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.apiSubnetAllowListInput">ApiSubnetAllowListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.k8SVersionInput">K8SVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow">K8SClusterMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.natGatewayIpInput">NatGatewayIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.nodeSubnetInput">NodeSubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.publicInput">PublicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.s3BucketsInput">S3BucketsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.allowReplace">AllowReplace</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.apiSubnetAllowList">ApiSubnetAllowList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.k8SVersion">K8SVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.natGatewayIp">NatGatewayIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.nodeSubnet">NodeSubnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.public">Public</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() K8SClusterMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference">K8SClusterMaintenanceWindowOutputReference</a>

---

##### `S3Buckets`<sup>Required</sup> <a name="S3Buckets" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.s3Buckets"></a>

```go
func S3Buckets() K8SClusterS3BucketsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList">K8SClusterS3BucketsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.timeouts"></a>

```go
func Timeouts() K8SClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference">K8SClusterTimeoutsOutputReference</a>

---

##### `ViableNodePoolVersions`<sup>Required</sup> <a name="ViableNodePoolVersions" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.viableNodePoolVersions"></a>

```go
func ViableNodePoolVersions() *[]*string
```

- *Type:* *[]*string

---

##### `AllowReplaceInput`<sup>Optional</sup> <a name="AllowReplaceInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.allowReplaceInput"></a>

```go
func AllowReplaceInput() interface{}
```

- *Type:* interface{}

---

##### `ApiSubnetAllowListInput`<sup>Optional</sup> <a name="ApiSubnetAllowListInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.apiSubnetAllowListInput"></a>

```go
func ApiSubnetAllowListInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `K8SVersionInput`<sup>Optional</sup> <a name="K8SVersionInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.k8SVersionInput"></a>

```go
func K8SVersionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() K8SClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow">K8SClusterMaintenanceWindow</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NatGatewayIpInput`<sup>Optional</sup> <a name="NatGatewayIpInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.natGatewayIpInput"></a>

```go
func NatGatewayIpInput() *string
```

- *Type:* *string

---

##### `NodeSubnetInput`<sup>Optional</sup> <a name="NodeSubnetInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.nodeSubnetInput"></a>

```go
func NodeSubnetInput() *string
```

- *Type:* *string

---

##### `PublicInput`<sup>Optional</sup> <a name="PublicInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.publicInput"></a>

```go
func PublicInput() interface{}
```

- *Type:* interface{}

---

##### `S3BucketsInput`<sup>Optional</sup> <a name="S3BucketsInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.s3BucketsInput"></a>

```go
func S3BucketsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowReplace`<sup>Required</sup> <a name="AllowReplace" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.allowReplace"></a>

```go
func AllowReplace() interface{}
```

- *Type:* interface{}

---

##### `ApiSubnetAllowList`<sup>Required</sup> <a name="ApiSubnetAllowList" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.apiSubnetAllowList"></a>

```go
func ApiSubnetAllowList() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `K8SVersion`<sup>Required</sup> <a name="K8SVersion" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.k8SVersion"></a>

```go
func K8SVersion() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NatGatewayIp`<sup>Required</sup> <a name="NatGatewayIp" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.natGatewayIp"></a>

```go
func NatGatewayIp() *string
```

- *Type:* *string

---

##### `NodeSubnet`<sup>Required</sup> <a name="NodeSubnet" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.nodeSubnet"></a>

```go
func NodeSubnet() *string
```

- *Type:* *string

---

##### `Public`<sup>Required</sup> <a name="Public" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.public"></a>

```go
func Public() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.k8SCluster.K8SCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### K8SClusterConfig <a name="K8SClusterConfig" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/k8scluster"

&k8scluster.K8SClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AllowReplace: interface{},
	ApiSubnetAllowList: *[]*string,
	Id: *string,
	K8SVersion: *string,
	Location: *string,
	MaintenanceWindow: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.k8SCluster.K8SClusterMaintenanceWindow,
	NatGatewayIp: *string,
	NodeSubnet: *string,
	Public: interface{},
	S3Buckets: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.k8SCluster.K8SClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.name">Name</a></code> | <code>*string</code> | The desired name for the cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.allowReplace">AllowReplace</a></code> | <code>interface{}</code> | When set to true, allows the update of immutable fields by destroying and re-creating the cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.apiSubnetAllowList">ApiSubnetAllowList</a></code> | <code>*[]*string</code> | Access to the K8s API server is restricted to these CIDRs. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#id K8SCluster#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.k8SVersion">K8SVersion</a></code> | <code>*string</code> | The desired Kubernetes Version. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.location">Location</a></code> | <code>*string</code> | This attribute is mandatory if the cluster is private. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow">K8SClusterMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.natGatewayIp">NatGatewayIp</a></code> | <code>*string</code> | The NAT gateway IP of the cluster if the cluster is private. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.nodeSubnet">NodeSubnet</a></code> | <code>*string</code> | The node subnet of the cluster, if the cluster is private. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.public">Public</a></code> | <code>interface{}</code> | The indicator if the cluster is public or private. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.s3Buckets">S3Buckets</a></code> | <code>interface{}</code> | s3_buckets block. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts">K8SClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The desired name for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#name K8SCluster#name}

---

##### `AllowReplace`<sup>Optional</sup> <a name="AllowReplace" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.allowReplace"></a>

```go
AllowReplace interface{}
```

- *Type:* interface{}

When set to true, allows the update of immutable fields by destroying and re-creating the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#allow_replace K8SCluster#allow_replace}

---

##### `ApiSubnetAllowList`<sup>Optional</sup> <a name="ApiSubnetAllowList" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.apiSubnetAllowList"></a>

```go
ApiSubnetAllowList *[]*string
```

- *Type:* *[]*string

Access to the K8s API server is restricted to these CIDRs.

Cluster-internal traffic is not affected by this restriction. If no allowlist is specified, access is not restricted. If an IP without subnet mask is provided, the default value will be used: 32 for IPv4 and 128 for IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#api_subnet_allow_list K8SCluster#api_subnet_allow_list}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#id K8SCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `K8SVersion`<sup>Optional</sup> <a name="K8SVersion" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.k8SVersion"></a>

```go
K8SVersion *string
```

- *Type:* *string

The desired Kubernetes Version.

For supported values, please check the API documentation. Downgrades are not supported. The provider will ignore downgrades of patch level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#k8s_version K8SCluster#k8s_version}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

This attribute is mandatory if the cluster is private.

The location must be enabled for your contract, or you must have a data center at that location. This attribute is immutable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#location K8SCluster#location}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.maintenanceWindow"></a>

```go
MaintenanceWindow K8SClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow">K8SClusterMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#maintenance_window K8SCluster#maintenance_window}

---

##### `NatGatewayIp`<sup>Optional</sup> <a name="NatGatewayIp" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.natGatewayIp"></a>

```go
NatGatewayIp *string
```

- *Type:* *string

The NAT gateway IP of the cluster if the cluster is private.

This attribute is immutable. Must be a reserved IP in the same location as the cluster's location. This attribute is mandatory if the cluster is private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#nat_gateway_ip K8SCluster#nat_gateway_ip}

---

##### `NodeSubnet`<sup>Optional</sup> <a name="NodeSubnet" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.nodeSubnet"></a>

```go
NodeSubnet *string
```

- *Type:* *string

The node subnet of the cluster, if the cluster is private.

This attribute is optional and immutable. Must be a valid CIDR notation for an IPv4 network prefix of 16 bits length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#node_subnet K8SCluster#node_subnet}

---

##### `Public`<sup>Optional</sup> <a name="Public" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.public"></a>

```go
Public interface{}
```

- *Type:* interface{}

The indicator if the cluster is public or private.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#public K8SCluster#public}

---

##### `S3Buckets`<sup>Optional</sup> <a name="S3Buckets" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.s3Buckets"></a>

```go
S3Buckets interface{}
```

- *Type:* interface{}

s3_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#s3_buckets K8SCluster#s3_buckets}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterConfig.property.timeouts"></a>

```go
Timeouts K8SClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts">K8SClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#timeouts K8SCluster#timeouts}

---

### K8SClusterMaintenanceWindow <a name="K8SClusterMaintenanceWindow" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/k8scluster"

&k8scluster.K8SClusterMaintenanceWindow {
	DayOfTheWeek: *string,
	Time: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow.property.dayOfTheWeek">DayOfTheWeek</a></code> | <code>*string</code> | Day of the week when maintenance is allowed. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow.property.time">Time</a></code> | <code>*string</code> | A clock time in the day when maintenance is allowed. |

---

##### `DayOfTheWeek`<sup>Required</sup> <a name="DayOfTheWeek" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow.property.dayOfTheWeek"></a>

```go
DayOfTheWeek *string
```

- *Type:* *string

Day of the week when maintenance is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#day_of_the_week K8SCluster#day_of_the_week}

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow.property.time"></a>

```go
Time *string
```

- *Type:* *string

A clock time in the day when maintenance is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#time K8SCluster#time}

---

### K8SClusterS3Buckets <a name="K8SClusterS3Buckets" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/k8scluster"

&k8scluster.K8SClusterS3Buckets {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets.property.name">Name</a></code> | <code>*string</code> | Name of the S3 bucket. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3Buckets.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#name K8SCluster#name}

---

### K8SClusterTimeouts <a name="K8SClusterTimeouts" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/k8scluster"

&k8scluster.K8SClusterTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#create K8SCluster#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#default K8SCluster#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#delete K8SCluster#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#update K8SCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#create K8SCluster#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#default K8SCluster#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#delete K8SCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.15/docs/resources/k8s_cluster#update K8SCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### K8SClusterMaintenanceWindowOutputReference <a name="K8SClusterMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/k8scluster"

k8scluster.NewK8SClusterMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) K8SClusterMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.dayOfTheWeekInput">DayOfTheWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.timeInput">TimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.dayOfTheWeek">DayOfTheWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow">K8SClusterMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfTheWeekInput`<sup>Optional</sup> <a name="DayOfTheWeekInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.dayOfTheWeekInput"></a>

```go
func DayOfTheWeekInput() *string
```

- *Type:* *string

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.timeInput"></a>

```go
func TimeInput() *string
```

- *Type:* *string

---

##### `DayOfTheWeek`<sup>Required</sup> <a name="DayOfTheWeek" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```go
func DayOfTheWeek() *string
```

- *Type:* *string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() K8SClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterMaintenanceWindow">K8SClusterMaintenanceWindow</a>

---


### K8SClusterS3BucketsList <a name="K8SClusterS3BucketsList" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/k8scluster"

k8scluster.NewK8SClusterS3BucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) K8SClusterS3BucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.get"></a>

```go
func Get(index *f64) K8SClusterS3BucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### K8SClusterS3BucketsOutputReference <a name="K8SClusterS3BucketsOutputReference" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/k8scluster"

k8scluster.NewK8SClusterS3BucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) K8SClusterS3BucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterS3BucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### K8SClusterTimeoutsOutputReference <a name="K8SClusterTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/k8scluster"

k8scluster.NewK8SClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) K8SClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.k8SCluster.K8SClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



