# `vpnIpsecGateway` Submodule <a name="`vpnIpsecGateway` Submodule" id="@cdktf/provider-ionoscloud.vpnIpsecGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnIpsecGateway <a name="VpnIpsecGateway" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway ionoscloud_vpn_ipsec_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsecgateway"

vpnipsecgateway.NewVpnIpsecGateway(scope Construct, id *string, config VpnIpsecGatewayConfig) VpnIpsecGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig">VpnIpsecGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig">VpnIpsecGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putConnections">PutConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnections` <a name="PutConnections" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putConnections"></a>

```go
func PutConnections(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putConnections.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putTimeouts"></a>

```go
func PutTimeouts(value VpnIpsecGatewayTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpnIpsecGateway resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsecgateway"

vpnipsecgateway.VpnIpsecGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsecgateway"

vpnipsecgateway.VpnIpsecGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsecgateway"

vpnipsecgateway.VpnIpsecGateway_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsecgateway"

vpnipsecgateway.VpnIpsecGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VpnIpsecGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VpnIpsecGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VpnIpsecGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VpnIpsecGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList">VpnIpsecGatewayConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference">VpnIpsecGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.connectionsInput">ConnectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.gatewayIpInput">GatewayIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.gatewayIp">GatewayIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.connections"></a>

```go
func Connections() VpnIpsecGatewayConnectionsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList">VpnIpsecGatewayConnectionsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.timeouts"></a>

```go
func Timeouts() VpnIpsecGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference">VpnIpsecGatewayTimeoutsOutputReference</a>

---

##### `ConnectionsInput`<sup>Optional</sup> <a name="ConnectionsInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.connectionsInput"></a>

```go
func ConnectionsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GatewayIpInput`<sup>Optional</sup> <a name="GatewayIpInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.gatewayIpInput"></a>

```go
func GatewayIpInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GatewayIp`<sup>Required</sup> <a name="GatewayIp" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.gatewayIp"></a>

```go
func GatewayIp() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnIpsecGatewayConfig <a name="VpnIpsecGatewayConfig" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsecgateway"

&vpnipsecgateway.VpnIpsecGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Connections: interface{},
	GatewayIp: *string,
	Location: *string,
	Name: *string,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.vpnIpsecGateway.VpnIpsecGatewayTimeouts,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.connections">Connections</a></code> | <code>interface{}</code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.gatewayIp">GatewayIp</a></code> | <code>*string</code> | Public IP address to be assigned to the gateway. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.location">Location</a></code> | <code>*string</code> | The location of the IPSec Gateway. Supported locations: de/fra, de/txl. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.name">Name</a></code> | <code>*string</code> | The human readable name of your IPSecGateway. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.description">Description</a></code> | <code>*string</code> | The human-readable description of your IPSec Gateway. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#id VpnIpsecGateway#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.version">Version</a></code> | <code>*string</code> | The IKE version that is permitted for the VPN tunnels. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.connections"></a>

```go
Connections interface{}
```

- *Type:* interface{}

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#connections VpnIpsecGateway#connections}

---

##### `GatewayIp`<sup>Required</sup> <a name="GatewayIp" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.gatewayIp"></a>

```go
GatewayIp *string
```

- *Type:* *string

Public IP address to be assigned to the gateway.

Note: This must be an IP address in the same datacenter as the connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#gateway_ip VpnIpsecGateway#gateway_ip}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the IPSec Gateway. Supported locations: de/fra, de/txl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#location VpnIpsecGateway#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The human readable name of your IPSecGateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#name VpnIpsecGateway#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The human-readable description of your IPSec Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#description VpnIpsecGateway#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#id VpnIpsecGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.timeouts"></a>

```go
Timeouts VpnIpsecGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#timeouts VpnIpsecGateway#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

The IKE version that is permitted for the VPN tunnels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#version VpnIpsecGateway#version}

---

### VpnIpsecGatewayConnections <a name="VpnIpsecGatewayConnections" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsecgateway"

&vpnipsecgateway.VpnIpsecGatewayConnections {
	DatacenterId: *string,
	Ipv4Cidr: *string,
	LanId: *string,
	Ipv6Cidr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | The datacenter to connect your VPN Gateway to. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.ipv4Cidr">Ipv4Cidr</a></code> | <code>*string</code> | Describes the private ipv4 subnet in your LAN that should be accessible by the VPN Gateway. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.lanId">LanId</a></code> | <code>*string</code> | The numeric LAN ID to connect your VPN Gateway to. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.ipv6Cidr">Ipv6Cidr</a></code> | <code>*string</code> | Describes the ipv6 subnet in your LAN that should be accessible by the VPN Gateway. |

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.datacenterId"></a>

```go
DatacenterId *string
```

- *Type:* *string

The datacenter to connect your VPN Gateway to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#datacenter_id VpnIpsecGateway#datacenter_id}

---

##### `Ipv4Cidr`<sup>Required</sup> <a name="Ipv4Cidr" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.ipv4Cidr"></a>

```go
Ipv4Cidr *string
```

- *Type:* *string

Describes the private ipv4 subnet in your LAN that should be accessible by the VPN Gateway.

Note: this should be the subnet already assigned to the LAN

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#ipv4_cidr VpnIpsecGateway#ipv4_cidr}

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.lanId"></a>

```go
LanId *string
```

- *Type:* *string

The numeric LAN ID to connect your VPN Gateway to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#lan_id VpnIpsecGateway#lan_id}

---

##### `Ipv6Cidr`<sup>Optional</sup> <a name="Ipv6Cidr" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.ipv6Cidr"></a>

```go
Ipv6Cidr *string
```

- *Type:* *string

Describes the ipv6 subnet in your LAN that should be accessible by the VPN Gateway.

Note: this should be the subnet already assigned to the LAN

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#ipv6_cidr VpnIpsecGateway#ipv6_cidr}

---

### VpnIpsecGatewayTimeouts <a name="VpnIpsecGatewayTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsecgateway"

&vpnipsecgateway.VpnIpsecGatewayTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#create VpnIpsecGateway#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#default VpnIpsecGateway#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#delete VpnIpsecGateway#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#update VpnIpsecGateway#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#create VpnIpsecGateway#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#default VpnIpsecGateway#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#delete VpnIpsecGateway#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.4/docs/resources/vpn_ipsec_gateway#update VpnIpsecGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnIpsecGatewayConnectionsList <a name="VpnIpsecGatewayConnectionsList" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsecgateway"

vpnipsecgateway.NewVpnIpsecGatewayConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpnIpsecGatewayConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.get"></a>

```go
func Get(index *f64) VpnIpsecGatewayConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnIpsecGatewayConnectionsOutputReference <a name="VpnIpsecGatewayConnectionsOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsecgateway"

vpnipsecgateway.NewVpnIpsecGatewayConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpnIpsecGatewayConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.resetIpv6Cidr">ResetIpv6Cidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv6Cidr` <a name="ResetIpv6Cidr" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.resetIpv6Cidr"></a>

```go
func ResetIpv6Cidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv4CidrInput">Ipv4CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv6CidrInput">Ipv6CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.lanIdInput">LanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.datacenterId">DatacenterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv4Cidr">Ipv4Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv6Cidr">Ipv6Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.lanId">LanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.datacenterIdInput"></a>

```go
func DatacenterIdInput() *string
```

- *Type:* *string

---

##### `Ipv4CidrInput`<sup>Optional</sup> <a name="Ipv4CidrInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv4CidrInput"></a>

```go
func Ipv4CidrInput() *string
```

- *Type:* *string

---

##### `Ipv6CidrInput`<sup>Optional</sup> <a name="Ipv6CidrInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv6CidrInput"></a>

```go
func Ipv6CidrInput() *string
```

- *Type:* *string

---

##### `LanIdInput`<sup>Optional</sup> <a name="LanIdInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.lanIdInput"></a>

```go
func LanIdInput() *string
```

- *Type:* *string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.datacenterId"></a>

```go
func DatacenterId() *string
```

- *Type:* *string

---

##### `Ipv4Cidr`<sup>Required</sup> <a name="Ipv4Cidr" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv4Cidr"></a>

```go
func Ipv4Cidr() *string
```

- *Type:* *string

---

##### `Ipv6Cidr`<sup>Required</sup> <a name="Ipv6Cidr" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv6Cidr"></a>

```go
func Ipv6Cidr() *string
```

- *Type:* *string

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.lanId"></a>

```go
func LanId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpnIpsecGatewayTimeoutsOutputReference <a name="VpnIpsecGatewayTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/vpnipsecgateway"

vpnipsecgateway.NewVpnIpsecGatewayTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpnIpsecGatewayTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



