# `vcpuServer` Submodule <a name="`vcpuServer` Submodule" id="@cdktf/provider-ionoscloud.vcpuServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VcpuServer <a name="VcpuServer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server ionoscloud_vcpu_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10/vcpuserver"

vcpuserver.NewVcpuServer(scope Construct, id *string, config VcpuServerConfig) VcpuServer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig">VcpuServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig">VcpuServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putLabel">PutLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putNic">PutNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putVolume">PutVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetBootCdrom">ResetBootCdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetBootImage">ResetBootImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetFirewallruleIds">ResetFirewallruleIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetImageName">ResetImageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetImagePassword">ResetImagePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetNic">ResetNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetVmState">ResetVmState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLabel` <a name="PutLabel" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putLabel"></a>

```go
func PutLabel(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putLabel.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNic` <a name="PutNic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putNic"></a>

```go
func PutNic(value VcpuServerNic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putNic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putTimeouts"></a>

```go
func PutTimeouts(value VcpuServerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts">VcpuServerTimeouts</a>

---

##### `PutVolume` <a name="PutVolume" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putVolume"></a>

```go
func PutVolume(value VcpuServerVolume)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a>

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetBootCdrom` <a name="ResetBootCdrom" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetBootCdrom"></a>

```go
func ResetBootCdrom()
```

##### `ResetBootImage` <a name="ResetBootImage" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetBootImage"></a>

```go
func ResetBootImage()
```

##### `ResetFirewallruleIds` <a name="ResetFirewallruleIds" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetFirewallruleIds"></a>

```go
func ResetFirewallruleIds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetId"></a>

```go
func ResetId()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetImageName"></a>

```go
func ResetImageName()
```

##### `ResetImagePassword` <a name="ResetImagePassword" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetImagePassword"></a>

```go
func ResetImagePassword()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetNic` <a name="ResetNic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetNic"></a>

```go
func ResetNic()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetSshKeys"></a>

```go
func ResetSshKeys()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVmState` <a name="ResetVmState" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.resetVmState"></a>

```go
func ResetVmState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VcpuServer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10/vcpuserver"

vcpuserver.VcpuServer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10/vcpuserver"

vcpuserver.VcpuServer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10/vcpuserver"

vcpuserver.VcpuServer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10/vcpuserver"

vcpuserver.VcpuServer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VcpuServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VcpuServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VcpuServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VcpuServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootVolume">BootVolume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.cpuFamily">CpuFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.firewallruleId">FirewallruleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.inlineVolumeIds">InlineVolumeIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.label">Label</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList">VcpuServerLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.nic">Nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference">VcpuServerNicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.primaryIp">PrimaryIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.primaryNic">PrimaryNic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference">VcpuServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference">VcpuServerVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootCdromInput">BootCdromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootImageInput">BootImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.coresInput">CoresInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.firewallruleIdsInput">FirewallruleIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imagePasswordInput">ImagePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.labelInput">LabelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.nicInput">NicInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.ramInput">RamInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.sshKeysInput">SshKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.vmStateInput">VmStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.volumeInput">VolumeInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootCdrom">BootCdrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootImage">BootImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.cores">Cores</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.firewallruleIds">FirewallruleIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imagePassword">ImagePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.ram">Ram</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.vmState">VmState</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BootVolume`<sup>Required</sup> <a name="BootVolume" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootVolume"></a>

```go
func BootVolume() *string
```

- *Type:* *string

---

##### `CpuFamily`<sup>Required</sup> <a name="CpuFamily" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.cpuFamily"></a>

```go
func CpuFamily() *string
```

- *Type:* *string

---

##### `FirewallruleId`<sup>Required</sup> <a name="FirewallruleId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.firewallruleId"></a>

```go
func FirewallruleId() *string
```

- *Type:* *string

---

##### `InlineVolumeIds`<sup>Required</sup> <a name="InlineVolumeIds" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.inlineVolumeIds"></a>

```go
func InlineVolumeIds() *[]*string
```

- *Type:* *[]*string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.label"></a>

```go
func Label() VcpuServerLabelList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList">VcpuServerLabelList</a>

---

##### `Nic`<sup>Required</sup> <a name="Nic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.nic"></a>

```go
func Nic() VcpuServerNicOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference">VcpuServerNicOutputReference</a>

---

##### `PrimaryIp`<sup>Required</sup> <a name="PrimaryIp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.primaryIp"></a>

```go
func PrimaryIp() *string
```

- *Type:* *string

---

##### `PrimaryNic`<sup>Required</sup> <a name="PrimaryNic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.primaryNic"></a>

```go
func PrimaryNic() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.timeouts"></a>

```go
func Timeouts() VcpuServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference">VcpuServerTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.volume"></a>

```go
func Volume() VcpuServerVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference">VcpuServerVolumeOutputReference</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `BootCdromInput`<sup>Optional</sup> <a name="BootCdromInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootCdromInput"></a>

```go
func BootCdromInput() *string
```

- *Type:* *string

---

##### `BootImageInput`<sup>Optional</sup> <a name="BootImageInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootImageInput"></a>

```go
func BootImageInput() *string
```

- *Type:* *string

---

##### `CoresInput`<sup>Optional</sup> <a name="CoresInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.coresInput"></a>

```go
func CoresInput() *f64
```

- *Type:* *f64

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `FirewallruleIdsInput`<sup>Optional</sup> <a name="FirewallruleIdsInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.firewallruleIdsInput"></a>

```go
func FirewallruleIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `ImagePasswordInput`<sup>Optional</sup> <a name="ImagePasswordInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imagePasswordInput"></a>

```go
func ImagePasswordInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.labelInput"></a>

```go
func LabelInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NicInput`<sup>Optional</sup> <a name="NicInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.nicInput"></a>

```go
func NicInput() VcpuServerNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a>

---

##### `RamInput`<sup>Optional</sup> <a name="RamInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.ramInput"></a>

```go
func RamInput() *f64
```

- *Type:* *f64

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.sshKeysInput"></a>

```go
func SshKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VmStateInput`<sup>Optional</sup> <a name="VmStateInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.vmStateInput"></a>

```go
func VmStateInput() *string
```

- *Type:* *string

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.volumeInput"></a>

```go
func VolumeInput() VcpuServerVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a>

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `BootCdrom`<sup>Required</sup> <a name="BootCdrom" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootCdrom"></a>

```go
func BootCdrom() *string
```

- *Type:* *string

---

##### `BootImage`<sup>Required</sup> <a name="BootImage" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.bootImage"></a>

```go
func BootImage() *string
```

- *Type:* *string

---

##### `Cores`<sup>Required</sup> <a name="Cores" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.cores"></a>

```go
func Cores() *f64
```

- *Type:* *f64

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `FirewallruleIds`<sup>Required</sup> <a name="FirewallruleIds" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.firewallruleIds"></a>

```go
func FirewallruleIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `ImagePassword`<sup>Required</sup> <a name="ImagePassword" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.imagePassword"></a>

```go
func ImagePassword() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ram`<sup>Required</sup> <a name="Ram" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.ram"></a>

```go
func Ram() *f64
```

- *Type:* *f64

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.sshKeys"></a>

```go
func SshKeys() *[]*string
```

- *Type:* *[]*string

---

##### `VmState`<sup>Required</sup> <a name="VmState" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.vmState"></a>

```go
func VmState() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VcpuServerConfig <a name="VcpuServerConfig" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10/vcpuserver"

&vcpuserver.VcpuServerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Cores: *f64,
	DatacenterId: *string,
	Name: *string,
	Ram: *f64,
	Volume: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10.vcpuServer.VcpuServerVolume,
	AvailabilityZone: *string,
	BootCdrom: *string,
	BootImage: *string,
	FirewallruleIds: *[]*string,
	Id: *string,
	ImageName: *string,
	ImagePassword: *string,
	Label: interface{},
	Nic: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10.vcpuServer.VcpuServerNic,
	SshKeys: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10.vcpuServer.VcpuServerTimeouts,
	VmState: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.cores">Cores</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#cores VcpuServer#cores}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#datacenter_id VcpuServer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#name VcpuServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.ram">Ram</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#ram VcpuServer#ram}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#availability_zone VcpuServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.bootCdrom">BootCdrom</a></code> | <code>*string</code> | The associated boot drive, if any. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.bootImage">BootImage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#boot_image VcpuServer#boot_image}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.firewallruleIds">FirewallruleIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#firewallrule_ids VcpuServer#firewallrule_ids}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#id VcpuServer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.imageName">ImageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#image_name VcpuServer#image_name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.imagePassword">ImagePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#image_password VcpuServer#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.label">Label</a></code> | <code>interface{}</code> | label block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.nic">Nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a></code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts">VcpuServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.vmState">VmState</a></code> | <code>*string</code> | Sets the power state of the vcpu server. Possible values: `RUNNING` or `SHUTOFF`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cores`<sup>Required</sup> <a name="Cores" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.cores"></a>

```go
Cores *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#cores VcpuServer#cores}.

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#datacenter_id VcpuServer#datacenter_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#name VcpuServer#name}.

---

##### `Ram`<sup>Required</sup> <a name="Ram" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.ram"></a>

```go
Ram *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#ram VcpuServer#ram}.

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.volume"></a>

```go
Volume VcpuServerVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#volume VcpuServer#volume}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#availability_zone VcpuServer#availability_zone}.

---

##### `BootCdrom`<sup>Optional</sup> <a name="BootCdrom" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.bootCdrom"></a>

```go
BootCdrom *string
```

- *Type:* *string

The associated boot drive, if any.

Must be the UUID of a bootable CDROM image that can be retrieved using the ionoscloud_image data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#boot_cdrom VcpuServer#boot_cdrom}

---

##### `BootImage`<sup>Optional</sup> <a name="BootImage" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.bootImage"></a>

```go
BootImage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#boot_image VcpuServer#boot_image}.

---

##### `FirewallruleIds`<sup>Optional</sup> <a name="FirewallruleIds" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.firewallruleIds"></a>

```go
FirewallruleIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#firewallrule_ids VcpuServer#firewallrule_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#id VcpuServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#image_name VcpuServer#image_name}.

---

##### `ImagePassword`<sup>Optional</sup> <a name="ImagePassword" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.imagePassword"></a>

```go
ImagePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#image_password VcpuServer#image_password}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.label"></a>

```go
Label interface{}
```

- *Type:* interface{}

label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#label VcpuServer#label}

---

##### `Nic`<sup>Optional</sup> <a name="Nic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.nic"></a>

```go
Nic VcpuServerNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a>

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#nic VcpuServer#nic}

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.sshKeys"></a>

```go
SshKeys *[]*string
```

- *Type:* *[]*string

Public SSH keys are set on the image as authorized keys for appropriate SSH login to the instance using the corresponding private key.

This field may only be set in creation requests. When reading, it always returns null. SSH keys are only supported if a public Linux image is used for the volume creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#ssh_keys VcpuServer#ssh_keys}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.timeouts"></a>

```go
Timeouts VcpuServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts">VcpuServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#timeouts VcpuServer#timeouts}

---

##### `VmState`<sup>Optional</sup> <a name="VmState" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerConfig.property.vmState"></a>

```go
VmState *string
```

- *Type:* *string

Sets the power state of the vcpu server. Possible values: `RUNNING` or `SHUTOFF`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#vm_state VcpuServer#vm_state}

---

### VcpuServerLabel <a name="VcpuServerLabel" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10/vcpuserver"

&vcpuserver.VcpuServerLabel {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#key VcpuServer#key}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#value VcpuServer#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#key VcpuServer#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabel.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#value VcpuServer#value}.

---

### VcpuServerNic <a name="VcpuServerNic" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10/vcpuserver"

&vcpuserver.VcpuServerNic {
	Lan: *f64,
	Dhcp: interface{},
	Dhcpv6: interface{},
	Firewall: interface{},
	FirewallActive: interface{},
	FirewallType: *string,
	Ips: *[]*string,
	Ipv6CidrBlock: *string,
	Ipv6Ips: *[]*string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.lan">Lan</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#lan VcpuServer#lan}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.dhcp">Dhcp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#dhcp VcpuServer#dhcp}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.dhcpv6">Dhcpv6</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#dhcpv6 VcpuServer#dhcpv6}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.firewall">Firewall</a></code> | <code>interface{}</code> | firewall block. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.firewallActive">FirewallActive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#firewall_active VcpuServer#firewall_active}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.firewallType">FirewallType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#firewall_type VcpuServer#firewall_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.ips">Ips</a></code> | <code>*[]*string</code> | Collection of IP addresses assigned to a nic. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#ipv6_cidr_block VcpuServer#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.ipv6Ips">Ipv6Ips</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#ipv6_ips VcpuServer#ipv6_ips}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#name VcpuServer#name}. |

---

##### `Lan`<sup>Required</sup> <a name="Lan" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.lan"></a>

```go
Lan *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#lan VcpuServer#lan}.

---

##### `Dhcp`<sup>Optional</sup> <a name="Dhcp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.dhcp"></a>

```go
Dhcp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#dhcp VcpuServer#dhcp}.

---

##### `Dhcpv6`<sup>Optional</sup> <a name="Dhcpv6" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.dhcpv6"></a>

```go
Dhcpv6 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#dhcpv6 VcpuServer#dhcpv6}.

---

##### `Firewall`<sup>Optional</sup> <a name="Firewall" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.firewall"></a>

```go
Firewall interface{}
```

- *Type:* interface{}

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#firewall VcpuServer#firewall}

---

##### `FirewallActive`<sup>Optional</sup> <a name="FirewallActive" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.firewallActive"></a>

```go
FirewallActive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#firewall_active VcpuServer#firewall_active}.

---

##### `FirewallType`<sup>Optional</sup> <a name="FirewallType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.firewallType"></a>

```go
FirewallType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#firewall_type VcpuServer#firewall_type}.

---

##### `Ips`<sup>Optional</sup> <a name="Ips" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.ips"></a>

```go
Ips *[]*string
```

- *Type:* *[]*string

Collection of IP addresses assigned to a nic.

Explicitly assigned public IPs need to come from reserved IP blocks, Passing value null or empty array will assign an IP address automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#ips VcpuServer#ips}

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.ipv6CidrBlock"></a>

```go
Ipv6CidrBlock *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#ipv6_cidr_block VcpuServer#ipv6_cidr_block}.

---

##### `Ipv6Ips`<sup>Optional</sup> <a name="Ipv6Ips" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.ipv6Ips"></a>

```go
Ipv6Ips *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#ipv6_ips VcpuServer#ipv6_ips}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#name VcpuServer#name}.

---

### VcpuServerNicFirewall <a name="VcpuServerNicFirewall" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10/vcpuserver"

&vcpuserver.VcpuServerNicFirewall {
	Protocol: *string,
	IcmpCode: *string,
	IcmpType: *string,
	Name: *string,
	PortRangeEnd: *f64,
	PortRangeStart: *f64,
	SourceIp: *string,
	SourceMac: *string,
	TargetIp: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#protocol VcpuServer#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.icmpCode">IcmpCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#icmp_code VcpuServer#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.icmpType">IcmpType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#icmp_type VcpuServer#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#name VcpuServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.portRangeEnd">PortRangeEnd</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#port_range_end VcpuServer#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.portRangeStart">PortRangeStart</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#port_range_start VcpuServer#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.sourceIp">SourceIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#source_ip VcpuServer#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.sourceMac">SourceMac</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#source_mac VcpuServer#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.targetIp">TargetIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#target_ip VcpuServer#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#type VcpuServer#type}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#protocol VcpuServer#protocol}.

---

##### `IcmpCode`<sup>Optional</sup> <a name="IcmpCode" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.icmpCode"></a>

```go
IcmpCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#icmp_code VcpuServer#icmp_code}.

---

##### `IcmpType`<sup>Optional</sup> <a name="IcmpType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.icmpType"></a>

```go
IcmpType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#icmp_type VcpuServer#icmp_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#name VcpuServer#name}.

---

##### `PortRangeEnd`<sup>Optional</sup> <a name="PortRangeEnd" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.portRangeEnd"></a>

```go
PortRangeEnd *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#port_range_end VcpuServer#port_range_end}.

---

##### `PortRangeStart`<sup>Optional</sup> <a name="PortRangeStart" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.portRangeStart"></a>

```go
PortRangeStart *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#port_range_start VcpuServer#port_range_start}.

---

##### `SourceIp`<sup>Optional</sup> <a name="SourceIp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.sourceIp"></a>

```go
SourceIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#source_ip VcpuServer#source_ip}.

---

##### `SourceMac`<sup>Optional</sup> <a name="SourceMac" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.sourceMac"></a>

```go
SourceMac *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#source_mac VcpuServer#source_mac}.

---

##### `TargetIp`<sup>Optional</sup> <a name="TargetIp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.targetIp"></a>

```go
TargetIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#target_ip VcpuServer#target_ip}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewall.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#type VcpuServer#type}.

---

### VcpuServerTimeouts <a name="VcpuServerTimeouts" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10/vcpuserver"

&vcpuserver.VcpuServerTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#create VcpuServer#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#default VcpuServer#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#delete VcpuServer#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#update VcpuServer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#create VcpuServer#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#default VcpuServer#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#delete VcpuServer#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#update VcpuServer#update}.

---

### VcpuServerVolume <a name="VcpuServerVolume" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10/vcpuserver"

&vcpuserver.VcpuServerVolume {
	DiskType: *string,
	AvailabilityZone: *string,
	BackupUnitId: *string,
	Bus: *string,
	LicenceType: *string,
	Name: *string,
	Size: *f64,
	UserData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.diskType">DiskType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#disk_type VcpuServer#disk_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#availability_zone VcpuServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.backupUnitId">BackupUnitId</a></code> | <code>*string</code> | The uuid of the Backup Unit that user has access to. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.bus">Bus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#bus VcpuServer#bus}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.licenceType">LicenceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#licence_type VcpuServer#licence_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#name VcpuServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.size">Size</a></code> | <code>*f64</code> | The size of the volume in GB. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.userData">UserData</a></code> | <code>*string</code> | The cloud-init configuration for the volume as base64 encoded string. |

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.diskType"></a>

```go
DiskType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#disk_type VcpuServer#disk_type}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#availability_zone VcpuServer#availability_zone}.

---

##### `BackupUnitId`<sup>Optional</sup> <a name="BackupUnitId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.backupUnitId"></a>

```go
BackupUnitId *string
```

- *Type:* *string

The uuid of the Backup Unit that user has access to.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#backup_unit_id VcpuServer#backup_unit_id}

---

##### `Bus`<sup>Optional</sup> <a name="Bus" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.bus"></a>

```go
Bus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#bus VcpuServer#bus}.

---

##### `LicenceType`<sup>Optional</sup> <a name="LicenceType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.licenceType"></a>

```go
LicenceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#licence_type VcpuServer#licence_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#name VcpuServer#name}.

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

The size of the volume in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#size VcpuServer#size}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

The cloud-init configuration for the volume as base64 encoded string.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' that has cloud-init compatibility in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.12/docs/resources/vcpu_server#user_data VcpuServer#user_data}

---

## Classes <a name="Classes" id="Classes"></a>

### VcpuServerLabelList <a name="VcpuServerLabelList" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10/vcpuserver"

vcpuserver.NewVcpuServerLabelList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VcpuServerLabelList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.get"></a>

```go
func Get(index *f64) VcpuServerLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VcpuServerLabelOutputReference <a name="VcpuServerLabelOutputReference" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10/vcpuserver"

vcpuserver.NewVcpuServerLabelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VcpuServerLabelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerLabelOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VcpuServerNicFirewallList <a name="VcpuServerNicFirewallList" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10/vcpuserver"

vcpuserver.NewVcpuServerNicFirewallList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VcpuServerNicFirewallList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.get"></a>

```go
func Get(index *f64) VcpuServerNicFirewallOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VcpuServerNicFirewallOutputReference <a name="VcpuServerNicFirewallOutputReference" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10/vcpuserver"

vcpuserver.NewVcpuServerNicFirewallOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VcpuServerNicFirewallOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetIcmpCode">ResetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetIcmpType">ResetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetPortRangeEnd">ResetPortRangeEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetPortRangeStart">ResetPortRangeStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetSourceIp">ResetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetSourceMac">ResetSourceMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetTargetIp">ResetTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIcmpCode` <a name="ResetIcmpCode" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetIcmpCode"></a>

```go
func ResetIcmpCode()
```

##### `ResetIcmpType` <a name="ResetIcmpType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetIcmpType"></a>

```go
func ResetIcmpType()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPortRangeEnd` <a name="ResetPortRangeEnd" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetPortRangeEnd"></a>

```go
func ResetPortRangeEnd()
```

##### `ResetPortRangeStart` <a name="ResetPortRangeStart" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetPortRangeStart"></a>

```go
func ResetPortRangeStart()
```

##### `ResetSourceIp` <a name="ResetSourceIp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetSourceIp"></a>

```go
func ResetSourceIp()
```

##### `ResetSourceMac` <a name="ResetSourceMac" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetSourceMac"></a>

```go
func ResetSourceMac()
```

##### `ResetTargetIp` <a name="ResetTargetIp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetTargetIp"></a>

```go
func ResetTargetIp()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpCodeInput">IcmpCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpTypeInput">IcmpTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeEndInput">PortRangeEndInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeStartInput">PortRangeStartInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceIpInput">SourceIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceMacInput">SourceMacInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.targetIpInput">TargetIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpCode">IcmpCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpType">IcmpType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeEnd">PortRangeEnd</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeStart">PortRangeStart</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceIp">SourceIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceMac">SourceMac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.targetIp">TargetIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IcmpCodeInput`<sup>Optional</sup> <a name="IcmpCodeInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpCodeInput"></a>

```go
func IcmpCodeInput() *string
```

- *Type:* *string

---

##### `IcmpTypeInput`<sup>Optional</sup> <a name="IcmpTypeInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpTypeInput"></a>

```go
func IcmpTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortRangeEndInput`<sup>Optional</sup> <a name="PortRangeEndInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeEndInput"></a>

```go
func PortRangeEndInput() *f64
```

- *Type:* *f64

---

##### `PortRangeStartInput`<sup>Optional</sup> <a name="PortRangeStartInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeStartInput"></a>

```go
func PortRangeStartInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SourceIpInput`<sup>Optional</sup> <a name="SourceIpInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceIpInput"></a>

```go
func SourceIpInput() *string
```

- *Type:* *string

---

##### `SourceMacInput`<sup>Optional</sup> <a name="SourceMacInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceMacInput"></a>

```go
func SourceMacInput() *string
```

- *Type:* *string

---

##### `TargetIpInput`<sup>Optional</sup> <a name="TargetIpInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.targetIpInput"></a>

```go
func TargetIpInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpCode"></a>

```go
func IcmpCode() *string
```

- *Type:* *string

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.icmpType"></a>

```go
func IcmpType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PortRangeEnd`<sup>Required</sup> <a name="PortRangeEnd" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeEnd"></a>

```go
func PortRangeEnd() *f64
```

- *Type:* *f64

---

##### `PortRangeStart`<sup>Required</sup> <a name="PortRangeStart" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.portRangeStart"></a>

```go
func PortRangeStart() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceIp"></a>

```go
func SourceIp() *string
```

- *Type:* *string

---

##### `SourceMac`<sup>Required</sup> <a name="SourceMac" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.sourceMac"></a>

```go
func SourceMac() *string
```

- *Type:* *string

---

##### `TargetIp`<sup>Required</sup> <a name="TargetIp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.targetIp"></a>

```go
func TargetIp() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VcpuServerNicOutputReference <a name="VcpuServerNicOutputReference" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10/vcpuserver"

vcpuserver.NewVcpuServerNicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VcpuServerNicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.putFirewall">PutFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetDhcp">ResetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetDhcpv6">ResetDhcpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetFirewall">ResetFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetFirewallActive">ResetFirewallActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetFirewallType">ResetFirewallType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetIps">ResetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetIpv6Ips">ResetIpv6Ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFirewall` <a name="PutFirewall" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.putFirewall"></a>

```go
func PutFirewall(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.putFirewall.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDhcp` <a name="ResetDhcp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetDhcp"></a>

```go
func ResetDhcp()
```

##### `ResetDhcpv6` <a name="ResetDhcpv6" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetDhcpv6"></a>

```go
func ResetDhcpv6()
```

##### `ResetFirewall` <a name="ResetFirewall" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetFirewall"></a>

```go
func ResetFirewall()
```

##### `ResetFirewallActive` <a name="ResetFirewallActive" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetFirewallActive"></a>

```go
func ResetFirewallActive()
```

##### `ResetFirewallType` <a name="ResetFirewallType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetFirewallType"></a>

```go
func ResetFirewallType()
```

##### `ResetIps` <a name="ResetIps" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetIps"></a>

```go
func ResetIps()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetIpv6CidrBlock"></a>

```go
func ResetIpv6CidrBlock()
```

##### `ResetIpv6Ips` <a name="ResetIpv6Ips" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetIpv6Ips"></a>

```go
func ResetIpv6Ips()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.deviceNumber">DeviceNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewall">Firewall</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList">VcpuServerNicFirewallList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.mac">Mac</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.pciSlot">PciSlot</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcpInput">DhcpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcpv6Input">Dhcpv6Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallActiveInput">FirewallActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallInput">FirewallInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallTypeInput">FirewallTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipsInput">IpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6IpsInput">Ipv6IpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.lanInput">LanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcp">Dhcp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcpv6">Dhcpv6</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallActive">FirewallActive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallType">FirewallType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ips">Ips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6Ips">Ipv6Ips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.lan">Lan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceNumber`<sup>Required</sup> <a name="DeviceNumber" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.deviceNumber"></a>

```go
func DeviceNumber() *f64
```

- *Type:* *f64

---

##### `Firewall`<sup>Required</sup> <a name="Firewall" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewall"></a>

```go
func Firewall() VcpuServerNicFirewallList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicFirewallList">VcpuServerNicFirewallList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mac`<sup>Required</sup> <a name="Mac" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.mac"></a>

```go
func Mac() *string
```

- *Type:* *string

---

##### `PciSlot`<sup>Required</sup> <a name="PciSlot" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.pciSlot"></a>

```go
func PciSlot() *f64
```

- *Type:* *f64

---

##### `DhcpInput`<sup>Optional</sup> <a name="DhcpInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcpInput"></a>

```go
func DhcpInput() interface{}
```

- *Type:* interface{}

---

##### `Dhcpv6Input`<sup>Optional</sup> <a name="Dhcpv6Input" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcpv6Input"></a>

```go
func Dhcpv6Input() interface{}
```

- *Type:* interface{}

---

##### `FirewallActiveInput`<sup>Optional</sup> <a name="FirewallActiveInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallActiveInput"></a>

```go
func FirewallActiveInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallInput`<sup>Optional</sup> <a name="FirewallInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallInput"></a>

```go
func FirewallInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallTypeInput`<sup>Optional</sup> <a name="FirewallTypeInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallTypeInput"></a>

```go
func FirewallTypeInput() *string
```

- *Type:* *string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipsInput"></a>

```go
func IpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6CidrBlockInput"></a>

```go
func Ipv6CidrBlockInput() *string
```

- *Type:* *string

---

##### `Ipv6IpsInput`<sup>Optional</sup> <a name="Ipv6IpsInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6IpsInput"></a>

```go
func Ipv6IpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LanInput`<sup>Optional</sup> <a name="LanInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.lanInput"></a>

```go
func LanInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Dhcp`<sup>Required</sup> <a name="Dhcp" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcp"></a>

```go
func Dhcp() interface{}
```

- *Type:* interface{}

---

##### `Dhcpv6`<sup>Required</sup> <a name="Dhcpv6" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.dhcpv6"></a>

```go
func Dhcpv6() interface{}
```

- *Type:* interface{}

---

##### `FirewallActive`<sup>Required</sup> <a name="FirewallActive" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallActive"></a>

```go
func FirewallActive() interface{}
```

- *Type:* interface{}

---

##### `FirewallType`<sup>Required</sup> <a name="FirewallType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.firewallType"></a>

```go
func FirewallType() *string
```

- *Type:* *string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ips"></a>

```go
func Ips() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6CidrBlock"></a>

```go
func Ipv6CidrBlock() *string
```

- *Type:* *string

---

##### `Ipv6Ips`<sup>Required</sup> <a name="Ipv6Ips" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.ipv6Ips"></a>

```go
func Ipv6Ips() *[]*string
```

- *Type:* *[]*string

---

##### `Lan`<sup>Required</sup> <a name="Lan" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.lan"></a>

```go
func Lan() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNicOutputReference.property.internalValue"></a>

```go
func InternalValue() VcpuServerNic
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerNic">VcpuServerNic</a>

---


### VcpuServerTimeoutsOutputReference <a name="VcpuServerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10/vcpuserver"

vcpuserver.NewVcpuServerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VcpuServerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VcpuServerVolumeOutputReference <a name="VcpuServerVolumeOutputReference" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v10/vcpuserver"

vcpuserver.NewVcpuServerVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VcpuServerVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetBackupUnitId">ResetBackupUnitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetBus">ResetBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetLicenceType">ResetLicenceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetBackupUnitId` <a name="ResetBackupUnitId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetBackupUnitId"></a>

```go
func ResetBackupUnitId()
```

##### `ResetBus` <a name="ResetBus" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetBus"></a>

```go
func ResetBus()
```

##### `ResetLicenceType` <a name="ResetLicenceType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetLicenceType"></a>

```go
func ResetLicenceType()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetSize"></a>

```go
func ResetSize()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.resetUserData"></a>

```go
func ResetUserData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.bootServer">BootServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.cpuHotPlug">CpuHotPlug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.deviceNumber">DeviceNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.discVirtioHotPlug">DiscVirtioHotPlug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.discVirtioHotUnplug">DiscVirtioHotUnplug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.nicHotPlug">NicHotPlug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.nicHotUnplug">NicHotUnplug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.pciSlot">PciSlot</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.ramHotPlug">RamHotPlug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.backupUnitIdInput">BackupUnitIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.busInput">BusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.licenceTypeInput">LicenceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.backupUnitId">BackupUnitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.bus">Bus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.diskType">DiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.licenceType">LicenceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BootServer`<sup>Required</sup> <a name="BootServer" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.bootServer"></a>

```go
func BootServer() *string
```

- *Type:* *string

---

##### `CpuHotPlug`<sup>Required</sup> <a name="CpuHotPlug" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.cpuHotPlug"></a>

```go
func CpuHotPlug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DeviceNumber`<sup>Required</sup> <a name="DeviceNumber" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.deviceNumber"></a>

```go
func DeviceNumber() *f64
```

- *Type:* *f64

---

##### `DiscVirtioHotPlug`<sup>Required</sup> <a name="DiscVirtioHotPlug" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.discVirtioHotPlug"></a>

```go
func DiscVirtioHotPlug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DiscVirtioHotUnplug`<sup>Required</sup> <a name="DiscVirtioHotUnplug" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.discVirtioHotUnplug"></a>

```go
func DiscVirtioHotUnplug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NicHotPlug`<sup>Required</sup> <a name="NicHotPlug" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.nicHotPlug"></a>

```go
func NicHotPlug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NicHotUnplug`<sup>Required</sup> <a name="NicHotUnplug" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.nicHotUnplug"></a>

```go
func NicHotUnplug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PciSlot`<sup>Required</sup> <a name="PciSlot" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.pciSlot"></a>

```go
func PciSlot() *f64
```

- *Type:* *f64

---

##### `RamHotPlug`<sup>Required</sup> <a name="RamHotPlug" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.ramHotPlug"></a>

```go
func RamHotPlug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `BackupUnitIdInput`<sup>Optional</sup> <a name="BackupUnitIdInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.backupUnitIdInput"></a>

```go
func BackupUnitIdInput() *string
```

- *Type:* *string

---

##### `BusInput`<sup>Optional</sup> <a name="BusInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.busInput"></a>

```go
func BusInput() *string
```

- *Type:* *string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.diskTypeInput"></a>

```go
func DiskTypeInput() *string
```

- *Type:* *string

---

##### `LicenceTypeInput`<sup>Optional</sup> <a name="LicenceTypeInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.licenceTypeInput"></a>

```go
func LicenceTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `BackupUnitId`<sup>Required</sup> <a name="BackupUnitId" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.backupUnitId"></a>

```go
func BackupUnitId() *string
```

- *Type:* *string

---

##### `Bus`<sup>Required</sup> <a name="Bus" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.bus"></a>

```go
func Bus() *string
```

- *Type:* *string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.diskType"></a>

```go
func DiskType() *string
```

- *Type:* *string

---

##### `LicenceType`<sup>Required</sup> <a name="LicenceType" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.licenceType"></a>

```go
func LicenceType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() VcpuServerVolume
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vcpuServer.VcpuServerVolume">VcpuServerVolume</a>

---



